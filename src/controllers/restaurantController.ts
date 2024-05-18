import { RestaurantService } from '../services/restaurantService'
import { NextFunction, Request, Response } from 'express'

const restaurantService = new RestaurantService()

type Params = {
    restaurantId: string
}

export class RestaurantController {
    async getAllRestaurants(req: Request, res: Response, next: NextFunction) {
        try {
            const restaurants = await restaurantService.getAllRestaurants()
            return res.json(restaurants)
        } catch (error) {
            return next(error)
        }
    }

    async getRestaurant(
        req: Request<Params>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const restaurant = await restaurantService.getRestaurant(
                req.params.restaurantId,
            )
            return res.json(restaurant)
        } catch (error) {
            return next(error)
        }
    }
}
