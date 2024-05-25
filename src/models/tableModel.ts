export class Table {
    br_stol: number
    kapacitet: number
    sektor: string
    id_objekt: string

    constructor(
        br_stol: number,
        kapacitet: number,
        sektor: string,
        id_objekt: string,
    ) {
        this.br_stol = br_stol
        this.kapacitet = kapacitet
        this.sektor = sektor
        this.id_objekt = id_objekt
    }
}
