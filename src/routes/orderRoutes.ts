import express from 'express'
import { OrderController } from '../controllers/orderController'
const orderRouter = express.Router()

const orderController = new OrderController()

orderRouter.get(
    '/:restaurantId/:orderId',
    orderController.getRestaurantOrderById,
)
orderRouter.post('/:restaurantId', orderController.createOrder)
orderRouter.get('/table/:tableNumber', orderController.getOrdersByTable)
orderRouter.get('/waiter/:waiterId', orderController.getOrdersByWaiter)
orderRouter.get(
    '/restaurant/:restaurantId',
    orderController.getOrdersByRestaurant,
)

export { orderRouter }
