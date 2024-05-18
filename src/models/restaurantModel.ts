import { Place } from './placeModel'

export class Restaurant {
    id_objekt: string
    naziv_objekt: string
    adresa: string
    pbr: number
    br_mobitel_objekt: string

    constructor(
        id_objekt: string,
        naziv_objekt: string,
        adresa: string,
        pbr: number,
        br_mobitel_objekt: string,
    ) {
        this.id_objekt = id_objekt
        this.naziv_objekt = naziv_objekt
        this.adresa = adresa
        this.pbr = pbr
        this.br_mobitel_objekt = br_mobitel_objekt
    }
}

export class RestaurantDTO {
    id_objekt: string
    naziv_objekt: string
    adresa: string
    mjesto: Place
    br_mobitel_objekt: string

    constructor(
        id_objekt: string,
        naziv_objekt: string,
        adresa: string,
        mjesto: Place,
        br_mobitel_objekt: string,
    ) {
        this.id_objekt = id_objekt
        this.naziv_objekt = naziv_objekt
        this.adresa = adresa
        this.mjesto = mjesto
        this.br_mobitel_objekt = br_mobitel_objekt
    }
}
