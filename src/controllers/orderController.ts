import { OrderService } from '../services/orderService'
import { NextFunction, Request, Response } from 'express'

const orderService = new OrderService()

type Params = {
    orderId: string
    tableNumber: string
    waiterId: string
    restaurantId: string
}

export class OrderController {
    async getOrdersByTable(
        req: Request<Params>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const tableNumber = parseInt(req.params.tableNumber)
            const orders = await orderService.getOrdersByTable(tableNumber)
            return res.json(orders)
        } catch (error) {
            return next(error)
        }
    }

    async getOrdersByWaiter(
        req: Request<Params>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const waiterId = req.params.waiterId
            const orders = await orderService.getOrdersByWaiter(waiterId)
            return res.json(orders)
        } catch (error) {
            return next(error)
        }
    }

    async getOrdersByRestaurant(
        req: Request<Params>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const restaurantId = req.params.restaurantId
            const orders =
                await orderService.getOrdersByRestaurant(restaurantId)
            return res.json(orders)
        } catch (error) {
            return next(error)
        }
    }

    async createOrder(req: Request<Params>, res: Response, next: NextFunction) {
        try {
            const order = req.body
            const createdOrder = await orderService.createOrder(
                req.params.restaurantId,
                order,
            )
            return res.json(createdOrder)
        } catch (error) {
            return next(error)
        }
    }
}
