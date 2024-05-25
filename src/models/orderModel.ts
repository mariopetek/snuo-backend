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

type OrderItem = Pick<Item, 'id_stavka'> & { kolicina: number }

export class OrderDTO {
    br_stol: number
    items: OrderItem[]

    constructor(br_stol: number, items: OrderItem[]) {
        this.br_stol = br_stol
        this.items = items
    }
}
