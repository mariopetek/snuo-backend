import { Item } from './itemModel'
import { Status } from './statusModel'

export class Order {
    id_narudzba: number
    vrijeme: Date
    status: Status
    br_stol: number
    id_objekt: string
    id_konobar: string

    constructor(
        id_narudzba: number,
        vrijeme: Date,
        status: Status,
        br_stol: number,
        id_objekt: string,
        id_konobar: string,
    ) {
        this.id_narudzba = id_narudzba
        this.vrijeme = vrijeme
        this.status = status
        this.br_stol = br_stol
        this.id_objekt = id_objekt
        this.id_konobar = id_konobar
    }
}

type OrderItem = Item & { kolicina: number }

export class OrderDTO {
    id_objekt: string
    br_stol: number
    items: OrderItem[]

    constructor(id_objekt: string, br_stol: number, items: OrderItem[]) {
        this.id_objekt = id_objekt
        this.br_stol = br_stol
        this.items = items
    }
    
    get totalPrice() {
        return this.items.reduce(
            (acc, item) => acc + item.cijena * item.kolicina,
            0,
        )
    }

    validate() {
        if (!this.id_objekt) {
            throw new Error('id_objekt is required');
        }
        if (this.br_stol === undefined || this.br_stol === null) {
            throw new Error('br_stol is required');
        }
        if (!Array.isArray(this.items) || this.items.length === 0) {
            throw new Error('At least one item is required');
        }
        for (const item of this.items) {
            if (!item.id_stavka) {
                throw new Error('id_stavka is required for each item');
            }
            if (item.kolicina === undefined || item.kolicina === null || item.kolicina <= 0) {
                throw new Error('Valid kolicina is required for each item');
            }
        }
    }
}
