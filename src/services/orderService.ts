import { Order, OrderDTO } from '../models/orderModel'
import * as db from '../config/database'
import { Status } from '../models/statusModel'
import { ValidationError } from '../errors/ValidationError'
import { validate as isValidUUID } from 'uuid'

export class OrderService {
    private async validate(order: OrderDTO, restaurantId: string) {
        if (order.br_stol === undefined || order.br_stol === null) {
            throw new ValidationError('br_stol is required')
        }
        if (isNaN(order.br_stol)) {
            throw new ValidationError('br_stol must be a number')
        }
        const tableResults = await db.query(
            'SELECT COUNT(*) FROM stol WHERE br_stol = $1 AND id_objekt = $2',
            [order.br_stol, restaurantId],
        )
        const tableCount = parseInt(tableResults.rows[0].count)
        if (tableCount === 0) {
            throw new ValidationError(
                'br_stol is not a valid table in this restaurant',
            )
        }

        if (order.id_konobar === undefined || order.id_konobar === null) {
            throw new ValidationError('id_konobar is required')
        }
        if (!isValidUUID(order.id_konobar)) {
            throw new ValidationError('id_konobar must be a valid UUID')
        }
        const waiterResults = await db.query(
            'SELECT COUNT(*) FROM zaposlenik, konobar WHERE id_zaposlenik = id_konobar AND id_konobar = $1 AND id_objekt=$2',
            [order.id_konobar, restaurantId],
        )
        const waiterCount = parseInt(waiterResults.rows[0].count)
        if (waiterCount === 0) {
            throw new ValidationError(
                'id_konobar is not a valid waiter in this restaurant',
            )
        }

        if (order.items === undefined || order.items === null) {
            throw new ValidationError('items is required')
        }
        if (!Array.isArray(order.items)) {
            throw new ValidationError('items must be an array')
        }
        if (order.items.length === 0) {
            throw new ValidationError('At least one item is required')
        }
        for (const item of order.items) {
            if (item.id_stavka === undefined || item.id_stavka === null) {
                throw new ValidationError('id_stavka is required for each item')
            }
            if (!isValidUUID(item.id_stavka)) {
                throw new ValidationError('id_stavka must be a valid UUID')
            }
            const itemResults = await db.query(
                'SELECT COUNT(*) FROM stavka WHERE id_stavka = $1 AND id_objekt = $2',
                [item.id_stavka, restaurantId],
            )
            const itemCount = parseInt(itemResults.rows[0].count)
            if (itemCount === 0) {
                throw new ValidationError(
                    'id_stavka is not a valid item in this restaurant',
                )
            }
            if (item.kolicina === undefined || item.kolicina === null) {
                throw new ValidationError('kolicina is required for each item')
            }
            if (isNaN(item.kolicina)) {
                throw new ValidationError('kolicina must be a number')
            }
            if (item.kolicina < 1 || item.kolicina > 10) {
                throw new ValidationError('kolicina must be between 1 and 10')
            }
        }
    }

    async createOrder(restaurantId: string, order: OrderDTO) {
        await this.validate(order, restaurantId)

        const client = await db.pool.connect()
        try {
            await client.query('BEGIN')

            const date = new Date()
            const berlinTime = date.toLocaleString('en-US', {
                timeZone: 'Europe/Berlin',
            })
            const time = new Date(berlinTime)
            const status = Status[Status.KREIRANA]

            const orderResults = await client.query(
                'INSERT INTO narudzba (vrijeme, status, br_stol, id_objekt, id_konobar) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                [
                    time.toISOString(),
                    status,
                    order.br_stol,
                    restaurantId,
                    order.id_konobar,
                ],
            )

            const orderId = orderResults.rows[0].id_narudzba

            for (const item of order.items) {
                await client.query(
                    'INSERT INTO narudzba_stavka (id_stavka, id_narudzba, kolicina) VALUES ($1, $2, $3)',
                    [item.id_stavka, orderId, item.kolicina],
                )
            }
            await client.query('COMMIT')

            const createdOrder = orderResults.rows[0] as Order
            return createdOrder
        } catch (error) {
            await client.query('ROLLBACK')
            throw error
        } finally {
            client.release()
        }
    }
    async getOrdersByTable(tableNumber: number) {
        const ordersResults = await db.query(
            'SELECT * FROM narudzba WHERE br_stol = $1',
            [tableNumber.toString()],
        )
        const orders = ordersResults.rows as Order[]
        return orders
    }
    async getOrdersByWaiter(waiterId: string) {
        const ordersResults = await db.query(
            'SELECT * FROM narudzba WHERE id_konobar = $1',
            [waiterId],
        )
        const orders = ordersResults.rows as Order[]
        return orders
    }
    async getOrdersByRestaurant(restaurantId: string) {
        const ordersResults = await db.query(
            'SELECT * FROM narudzba WHERE id_objekt = $1',
            [restaurantId],
        )
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
        await db.query('DELETE FROM narudzba WHERE id_narudzba = $1', [
            orderId.toString(),
        ])
    }
}
