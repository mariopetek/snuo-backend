import { NextFunction, Request, Response } from 'express'
import { TableService } from '../services/tableService'

type Params = {
    restaurantId: string
}

const tableService = new TableService()

export class TableController {
    async getRestaurantTables(
        req: Request<Params>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const tables = await tableService.getRestaurantTables(
                req.params.restaurantId,
            )
            return res.json(tables)
        } catch (error) {
            return next(error)
        }
    }
}
