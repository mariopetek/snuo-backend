import { Item } from '../models/itemModel'
import * as db from '../config/database'

export class ItemService {
    async getAllItems() {
        const itemsResults = await db.query('SELECT * FROM stavka')
        const items = itemsResults.rows as Item[]
        return items
    }
    async getAllDrinks() {
        const drinksResults = await db.query(
            'SELECT * FROM stavka WHERE kategorija IN ($1, $2, $3, $4, $5)',
            ['TOPLI_NAPITCI', 'BEZALKOHOLNA_PICA', 'VINA', 'PIVA', 'KOKTELI'],
        )
        const drinks = drinksResults.rows as Item[]
        return drinks
    }
    async getAllAppetizers() {
        const appetizersResults = await db.query(
            'SELECT * FROM stavka WHERE kategorija = $1',
            ['PREDJELA'],
        )
        const appetizers = appetizersResults.rows as Item[]
        return appetizers
    }
    async getAllMainDishes() {
        const mainDishesResults = await db.query(
            'SELECT * FROM stavka WHERE kategorija = $1',
            ['GLAVNA_JELA'],
        )
        const mainDishes = mainDishesResults.rows as Item[]
        return mainDishes
    }
    async getAllDesserts() {
        const dessertsResults = await db.query(
            'SELECT * FROM stavka WHERE kategorija = $1',
            ['DESERTI'],
        )
        const desserts = dessertsResults.rows as Item[]
        return desserts
    }
    async getAllSideDishes() {
        const sideDishesResults = await db.query(
            'SELECT * FROM stavka WHERE kategorija = $1',
            ['PRILOZI'],
        )
        const sideDishes = sideDishesResults.rows as Item[]
        return sideDishes
    }
    async getAllSauces() {
        const saucesResults = await db.query(
            'SELECT * FROM stavka WHERE kategorija = $1',
            ['UMACI'],
        )
        const sauces = saucesResults.rows as Item[]
        return sauces
    }

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
                'TOPLI_NAPITCI',
                'BEZALKOHOLNA_PICA',
                'VINA',
                'PIVA',
                'KOKTELI',
            ],
        )
        const restaurantDrinks = restaurantDrinksResults.rows as Item[]
        return restaurantDrinks
    }
    async getRestaurantAppetizers(restaurantId: string) {
        const restaurantAppetizersResults = await db.query(
            'SELECT * FROM stavka WHERE id_objekt = $1 AND kategorija = $2',
            [restaurantId, 'PREDJELA'],
        )
        const restaurantAppetizers = restaurantAppetizersResults.rows as Item[]
        return restaurantAppetizers
    }
    async getRestaurantMainDishes(restaurantId: string) {
        const restaurantMainDishesResults = await db.query(
            'SELECT * FROM stavka WHERE id_objekt = $1 AND kategorija = $2',
            [restaurantId, 'GLAVNA_JELA'],
        )
        const restaurantMainDishes = restaurantMainDishesResults.rows as Item[]
        return restaurantMainDishes
    }
    async getRestaurantDesserts(restaurantId: string) {
        const restaurantDessertsResults = await db.query(
            'SELECT * FROM stavka WHERE id_objekt = $1 AND kategorija = $2',
            [restaurantId, 'DESERTI'],
        )
        const restaurantDesserts = restaurantDessertsResults.rows as Item[]
        return restaurantDesserts
    }
    async getRestaurantSideDishes(restaurantId: string) {
        const restaurantSideDishesResults = await db.query(
            'SELECT * FROM stavka WHERE id_objekt = $1 AND kategorija = $2',
            [restaurantId, 'PRILOZI'],
        )
        const restaurantSideDishes = restaurantSideDishesResults.rows as Item[]
        return restaurantSideDishes
    }
    async getRestaurantSauces(restaurantId: string) {
        const restaurantSaucesResults = await db.query(
            'SELECT * FROM stavka WHERE id_objekt = $1 AND kategorija = $2',
            [restaurantId, 'UMACI'],
        )
        const restaurantSauces = restaurantSaucesResults.rows as Item[]
        return restaurantSauces
    }
}
