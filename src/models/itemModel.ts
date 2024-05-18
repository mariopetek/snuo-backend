import { Kategorija } from './categoryModel'

export class Item {
    id_stavka: string
    naziv_stavka: string
    cijena: number
    kategorija: Kategorija
    id_objekt: string

    constructor(
        id_stavka: string,
        naziv_stavka: string,
        cijena: number,
        kategorija: Kategorija,
        id_objekt: string,
    ) {
        this.id_stavka = id_stavka
        this.naziv_stavka = naziv_stavka
        this.cijena = cijena
        this.kategorija = kategorija
        this.id_objekt = id_objekt
    }
}
