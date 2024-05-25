import express from 'express'
import { TableController } from '../controllers/tableController'

const tableRouter = express.Router()

const tableController = new TableController()

tableRouter.get('/:restaurantId', tableController.getRestaurantTables)

export { tableRouter }
