import { ItemService } from '../services/itemService'
import { NextFunction, Request, Response } from 'express'

const itemService = new ItemService()

type Params = {
    restaurantId: string
}

export class ItemController {
    async getRestaurantItems(
        req: Request<Params>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const restaurantItems = await itemService.getRestaurantItems(
                req.params.restaurantId,
            )
            return res.json(restaurantItems)
        } catch (error) {
            return next(error)
        }
    }
    async getRestaurantDrinks(
        req: Request<Params>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const restaurantDrinks = await itemService.getRestaurantDrinks(
                req.params.restaurantId,
            )
            return res.json(restaurantDrinks)
        } catch (error) {
            return next(error)
        }
    }
    async getRestaurantAppetizers(
        req: Request<Params>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const restaurantAppetizers =
                await itemService.getRestaurantAppetizers(
                    req.params.restaurantId,
                )
            return res.json(restaurantAppetizers)
        } catch (error) {
            return next(error)
        }
    }
    async getRestaurantMainDishes(
        req: Request<Params>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const restaurantMainDishes =
                await itemService.getRestaurantMainDishes(
                    req.params.restaurantId,
                )
            return res.json(restaurantMainDishes)
        } catch (error) {
            return next(error)
        }
    }
    async getRestaurantDesserts(
        req: Request<Params>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const restaurantDesserts = await itemService.getRestaurantDesserts(
                req.params.restaurantId,
            )
            return res.json(restaurantDesserts)
        } catch (error) {
            return next(error)
        }
    }
    async getRestaurantSideDishes(
        req: Request<Params>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const restaurantSideDishes =
                await itemService.getRestaurantSideDishes(
                    req.params.restaurantId,
                )
            return res.json(restaurantSideDishes)
        } catch (error) {
            return next(error)
        }
    }
    async getRestaurantSauces(
        req: Request<Params>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const restaurantSauces = await itemService.getRestaurantSauces(
                req.params.restaurantId,
            )
            return res.json(restaurantSauces)
        } catch (error) {
            return next(error)
        }
    }
    async getRestaurantMainAndAppetizers(
        req: Request<Params>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const mainAndAppetizers =
                await itemService.getRestaurantMainAndAppetizers(
                    req.params.restaurantId,
                )
            return res.json(mainAndAppetizers)
        } catch (error) {
            return next(error)
        }
    }
    async getRestaurantSideDishesAndSauces(
        req: Request<Params>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const sideDishesAndSauces =
                await itemService.getRestaurantSideDishesAndSauces(
                    req.params.restaurantId,
                )
            return res.json(sideDishesAndSauces)
        } catch (error) {
            return next(error)
        }
    }
}
