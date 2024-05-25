import * as db from '../config/database'
import { Table } from '../models/tableModel'

export class TableService {
    async getRestaurantTables(restaurantId: string) {
        const tablesResult = await db.query(
            'SELECT * FROM stol WHERE id_objekt = $1',
            [restaurantId],
        )
        const tables = tablesResult.rows as Table[]
        return tables
    }
}
