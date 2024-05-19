import express from 'express'
import { OrderController } from '../controllers/orderController'
const orderRouter = express.Router()

const orderController = new OrderController()

orderRouter.post('/create', orderController.createOrder)
orderRouter.get('/table/:tableNumber', orderController.getOrdersByTable)
orderRouter.get('/waiter/:waiterId', orderController.getOrdersByWaiter)
orderRouter.get('/restaurant/:restaurantId', orderController.getOrdersByRestaurant)


export {orderRouter}