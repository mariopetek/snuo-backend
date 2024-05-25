import { Item } from '../models/itemModel'
import * as db from '../config/database'
import { Category } from '../models/categoryModel'

export class ItemService {
    async getRestaurantItems(restaurantId: string) {
        const restaurantItemsResults = await db.query(
            'SELECT * FROM stavka WHERE id_objekt = $1',
            [restaurantId],
        )
        const restaurantItems = restaurantItemsResults.rows as Item[]
        return restaurantItems
    }
    async getRestaurantDrinks(restaurantId: string) {
        const restaurantDrinksResults = await db.query(
            'SELECT * FROM stavka WHERE id_objekt = $1 AND kategorija IN ($2, $3, $4, $5, $6)',
            [
                restaurantId,
                Category[Category.TOPLI_NAPITCI],
                Category[Category.BEZALKOHOLNA_PICA],
                Category[Category.VINA],
                Category[Category.PIVA],
                Category[Category.KOKTELI],
            ],
        )
        const restaurantDrinks = restaurantDrinksResults.rows as Item[]
        return restaurantDrinks
    }
    async getRestaurantAppetizers(restaurantId: string) {
        const restaurantAppetizersResults = await db.query(
            'SELECT * FROM stavka WHERE id_objekt = $1 AND kategorija = $2',
            [restaurantId, Category[Category.PREDJELA]],
        )
        const restaurantAppetizers = restaurantAppetizersResults.rows as Item[]
        return restaurantAppetizers
    }
    async getRestaurantMainDishes(restaurantId: string) {
        const restaurantMainDishesResults = await db.query(
            'SELECT * FROM stavka WHERE id_objekt = $1 AND kategorija = $2',
            [restaurantId, Category[Category.GLAVNA_JELA]],
        )
        const restaurantMainDishes = restaurantMainDishesResults.rows as Item[]
        return restaurantMainDishes
    }
    async getRestaurantDesserts(restaurantId: string) {
        const restaurantDessertsResults = await db.query(
            'SELECT * FROM stavka WHERE id_objekt = $1 AND kategorija = $2',
            [restaurantId, Category[Category.DESERTI]],
        )
        const restaurantDesserts = restaurantDessertsResults.rows as Item[]
        return restaurantDesserts
    }
    async getRestaurantSideDishes(restaurantId: string) {
        const restaurantSideDishesResults = await db.query(
            'SELECT * FROM stavka WHERE id_objekt = $1 AND kategorija = $2',
            [restaurantId, Category[Category.PRILOZI]],
        )
        const restaurantSideDishes = restaurantSideDishesResults.rows as Item[]
        return restaurantSideDishes
    }
    async getRestaurantSauces(restaurantId: string) {
        const restaurantSaucesResults = await db.query(
            'SELECT * FROM stavka WHERE id_objekt = $1 AND kategorija = $2',
            [restaurantId, Category[Category.UMACI]],
        )
        const restaurantSauces = restaurantSaucesResults.rows as Item[]
        return restaurantSauces
    }
    async getRestaurantMainAndAppetizers(restaurantId: string) {
        const mainAndAppetizersResults = await db.query(
            'SELECT * FROM stavka WHERE id_objekt = $1 AND kategorija IN ($2, $3)',
            [
                restaurantId,
                Category[Category.PREDJELA],
                Category[Category.GLAVNA_JELA],
            ],
        )
        const mainAndAppetizers = mainAndAppetizersResults.rows as Item[]
        return mainAndAppetizers
    }
    async getRestaurantSideDishesAndSauces(restaurantId: string) {
        const sideDishesAndSaucesResults = await db.query(
            'SELECT * FROM stavka WHERE id_objekt = $1 AND kategorija IN ($2, $3)',
            [
                restaurantId,
                Category[Category.PRILOZI],
                Category[Category.UMACI],
            ],
        )
        const sideDishesAndSauces = sideDishesAndSaucesResults.rows as Item[]
        return sideDishesAndSauces
    }
}
