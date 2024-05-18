import { ItemService } from '../services/itemService'
import { NextFunction, Request, Response } from 'express'

const itemService = new ItemService()

type Params = {
    restaurantId: string
}

export class ItemController {
    async getAllItems(req: Request<Params>, res: Response, next: NextFunction) {
        try {
            const allItems = await itemService.getAllItems()
            return res.json(allItems)
        } catch (error) {
            return next(error)
        }
    }
    async getAllDrinks(
        req: Request<Params>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const allDrinks = await itemService.getAllDrinks()
            return res.json(allDrinks)
        } catch (error) {
            return next(error)
        }
    }
    async getAllAppetizers(
        req: Request<Params>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const allAppetizers = await itemService.getAllAppetizers()
            return res.json(allAppetizers)
        } catch (error) {
            return next(error)
        }
    }
    async getAllMainDishes(
        req: Request<Params>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const allMainDishes = await itemService.getAllMainDishes()
            return res.json(allMainDishes)
        } catch (error) {
            return next(error)
        }
    }
    async getAllDesserts(
        req: Request<Params>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const allDesserts = await itemService.getAllDesserts()
            return res.json(allDesserts)
        } catch (error) {
            return next(error)
        }
    }
    async getAllSideDishes(
        req: Request<Params>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const allSideDishes = await itemService.getAllSideDishes()
            return res.json(allSideDishes)
        } catch (error) {
            return next(error)
        }
    }
    async getAllSauces(
        req: Request<Params>,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const allSauces = await itemService.getAllSauces()
            return res.json(allSauces)
        } catch (error) {
            return next(error)
        }
    }

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
}
