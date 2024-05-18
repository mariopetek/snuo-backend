import express from 'express'
import { RestaurantController } from '../controllers/restaurantController'

const restaurantRouter = express.Router()

const restaurantController = new RestaurantController()

restaurantRouter.get('/', restaurantController.getAllRestaurants)
restaurantRouter.get('/:restaurantId', restaurantController.getRestaurant)

export { restaurantRouter }
