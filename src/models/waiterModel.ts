import { Employee } from './employeeModel'
import { Shift } from './shiftModel'

export class Waiter extends Employee {
    smjena: Shift

    constructor(
        id_zaposlenik: string,
        ime: string,
        prezime: string,
        email: string,
        id_objekt: string,
        smjena: Shift,
    ) {
        super(id_zaposlenik, ime, prezime, email, id_objekt)
        this.smjena = smjena
    }
}
