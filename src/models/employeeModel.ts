export class Employee {
    id_zaposlenik: string
    ime: string
    prezime: string
    email: string
    id_objekt: string

    constructor(
        id_zaposlenik: string,
        ime: string,
        prezime: string,
        email: string,
        id_objekt: string,
    ) {
        this.id_zaposlenik = id_zaposlenik
        this.ime = ime
        this.prezime = prezime
        this.email = email
        this.id_objekt = id_objekt
    }
}
