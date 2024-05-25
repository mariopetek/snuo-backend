import { NextFunction, Request, Response } from 'express'
import { EmployeeService } from '../services/employeeService'

type Params = {
    restaurantId: string
}

const employeeService = new EmployeeService()

export class EmployeeController {
    async getRestaurantWaitersByShift(
        req: Request<Params>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const waiters = await employeeService.getRestaurantWaitersByShift(
                req.params.restaurantId,
            )
            return res.json(waiters)
        } catch (error) {
            return next(error)
        }
    }
}
