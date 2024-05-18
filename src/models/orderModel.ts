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

    validate() {}
}
