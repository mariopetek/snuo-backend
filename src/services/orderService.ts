import { Order, OrderDTO } from '../models/orderModel'
import * as db from '../config/database'
import { Status } from '../models/statusModel';

export class OrderService {
    async createOrder(order2: OrderDTO) {
        const order = new OrderDTO(order2.id_objekt, order2.br_stol, order2.items);
        const client = await db.pool.connect();
        try {
            await client.query('BEGIN');

            const date = new Date(); 
            const berlinTime = date.toLocaleString("en-US", {timeZone: "Europe/Berlin"});
            const time = new Date(berlinTime);
            const konobarId = 'd9a0196e-28b0-404f-9371-9f6a2b56a6bb';
            const status = Status.KREIRANA

            order.validate();

            const orderResults = await client.query(
                'INSERT INTO narudzba (vrijeme, status, br_stol, id_objekt, id_konobar) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                [time.toISOString(), status, order.br_stol.toString(), order.id_objekt, konobarId],
            )
            for (const item of order.items) {
                await client.query(
                    'INSERT INTO narudzba_stavka (id_stavka, id_narudzba, kolicina) VALUES ($1, $2, $3)',
                    [item.id_stavka, orderResults.rows[0].id_narudzba, item.kolicina],
                )
            }
            await client.query('COMMIT');

            const createdOrder = orderResults.rows[0] as Order
            return createdOrder;
        } catch (error) {
            await client.query('ROLLBACK');
            throw error;
        } finally {
            client.release();
        }
    
    }
    async getOrdersByTable(tableNumber: number) {
        const ordersResults = await db.query('SELECT * FROM narudzba WHERE br_stol = $1', [tableNumber.toString()])
        const orders = ordersResults.rows as Order[]
        return orders
    }
    async getOrdersByWaiter(waiterId: string) {
        const ordersResults = await db.query('SELECT * FROM narudzba WHERE id_konobar = $1', [waiterId])
        const orders = ordersResults.rows as Order[]
        return orders
    }
    async getOrdersByRestaurant(restaurantId: string) {
        const ordersResults = await db.query('SELECT * FROM narudzba WHERE id_objekt = $1', [restaurantId])
        const orders = ordersResults.rows as Order[]
        return orders
    }
    async updateOrderStatus(orderId: number, newStatus: string) {
        const orderResults = await db.query(
            'UPDATE narudzba SET status = $1 WHERE id_narudzba = $2 RETURNING *',
            [newStatus, orderId.toString()],
        )
        const updatedOrder = orderResults.rows[0] as Order
        return updatedOrder
    }
    async deleteOrder(orderId: number) {
        await db.query('DELETE FROM narudzba WHERE id_narudzba = $1', [orderId.toString()])
    }
}