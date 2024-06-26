import express from 'express'
import { ItemController } from '../controllers/itemController'

const itemRouter = express.Router()

const itemController = new ItemController()

itemRouter.get('/:restaurantId', itemController.getRestaurantItems)
itemRouter.get('/:restaurantId/drinks', itemController.getRestaurantDrinks)
itemRouter.get(
    '/:restaurantId/appetizers',
    itemController.getRestaurantAppetizers,
)
itemRouter.get(
    '/:restaurantId/main-dishes',
    itemController.getRestaurantMainDishes,
)
itemRouter.get('/:restaurantId/desserts', itemController.getRestaurantDesserts)
itemRouter.get(
    '/:restaurantId/side-dishes',
    itemController.getRestaurantSideDishes,
)
itemRouter.get('/:restaurantId/sauces', itemController.getRestaurantSauces)
itemRouter.get(
    '/:restaurantId/main-and-appetizers',
    itemController.getRestaurantMainAndAppetizers,
)
itemRouter.get(
    '/:restaurantId/side-dishes-and-sauces',
    itemController.getRestaurantSideDishesAndSauces,
)
export { itemRouter }
