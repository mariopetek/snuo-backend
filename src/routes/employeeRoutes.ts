import express from 'express'
import { EmployeeController } from '../controllers/employeeController'

const employeeRouter = express.Router()

const employeeController = new EmployeeController()

employeeRouter.get(
    '/:restaurantId/waiters/shift',
    employeeController.getRestaurantWaitersByShift,
)

export { employeeRouter }
