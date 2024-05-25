import { Shift } from '../models/shiftModel'
import * as db from '../config/database'
import { Waiter } from '../models/waiterModel'

export class EmployeeService {
    private getCurrentShift() {
        const shift = new Date().getHours()
        if (shift >= 6 && shift < 14) {
            return Shift[Shift.JUTARNJA]
        } else if (shift >= 14 && shift < 22) {
            return Shift[Shift.POPODNEVNA]
        } else {
            return Shift[Shift.NOCNA]
        }
    }

    async getRestaurantWaitersByShift(restaurantId: string) {
        const currentShift = this.getCurrentShift()
        const waitersResult = await db.query(
            'SELECT id_zaposlenik, ime, prezime, email, smjena, id_objekt FROM zaposlenik, konobar WHERE id_zaposlenik = id_konobar AND id_objekt = $1 AND smjena = $2',
            [restaurantId, currentShift],
        )
        const waiters = waitersResult.rows as Waiter[]
        return waiters
    }
}
