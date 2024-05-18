import { Restaurant, RestaurantDTO } from '../models/restaurantModel'
import * as db from '../config/database'
import { Place } from '../models/placeModel'
import { NotFoundError } from '../errors/NotFoundError'

export class RestaurantService {
    async getAllRestaurants() {
        const restaurantsResults = await db.query('SELECT * FROM objekt')

        const restaurants = restaurantsResults.rows as Restaurant[]
        return restaurants
    }
    async getRestaurant(restaurantId: string) {
        const restaurantResults = await db.query(
            'SELECT * FROM objekt WHERE id_objekt = $1',
            [restaurantId],
        )

        if (restaurantResults.rowCount === 0) {
            throw new NotFoundError()
        }

        const restaurant = restaurantResults.rows[0] as Restaurant

        const placeResults = await db.query(
            'SELECT * FROM mjesto WHERE pbr = $1',
            [restaurant.pbr.toString()],
        )

        if (placeResults.rowCount === 0) {
            throw new NotFoundError()
        }

        const place = placeResults.rows[0] as Place

        return new RestaurantDTO(
            restaurant.id_objekt,
            restaurant.naziv_objekt,
            restaurant.adresa,
            place,
            restaurant.br_mobitel_objekt,
        )
    }
}
