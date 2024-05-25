import app from '../index'
import request from 'supertest'
import http from 'http'

let server: http.Server
const TEST_PORT = 3005

beforeAll((done) => {
    server = app.listen(TEST_PORT, () => {
        console.log(`Test server is running on port ${TEST_PORT}`)
        done()
    })
})

afterAll((done) => {
    server.close(done)
})

describe('GET /api/items/d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e/main-and-appetizers', () => {
    it('should return 200 OK and the menu items data', async () => {
        const response = await request(app).get(
            `/api/items/d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e/main-and-appetizers`,
        )
        expect(response.status).toBe(200)
        expect(response.body).toStrictEqual([
            {
                id_stavka: 'a1e8f95e-0bf7-4f6a-8e54-72610b344563',
                naziv_stavka: 'Biftek',
                cijena: '15.50',
                kategorija: 'GLAVNA_JELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                id_stavka: 'a3a24e59-71e1-4637-b68e-ecdc512b5a24',
                naziv_stavka: 'Ramstek',
                cijena: '16.00',
                kategorija: 'GLAVNA_JELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                id_stavka: '3c2d8e23-27fa-4df9-9dc8-3b25d8f1b218',
                naziv_stavka: 'Zagrebački odrezak',
                cijena: '14.00',
                kategorija: 'GLAVNA_JELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                id_stavka: '4e1c9a1d-4a3e-4f2b-9444-47f1d7a6a745',
                naziv_stavka: 'Bečki odrezak',
                cijena: '12.50',
                kategorija: 'GLAVNA_JELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                id_stavka: '5f2b3c28-1aef-4a90-9d31-76d345e4e6a7',
                naziv_stavka: 'Pljeskavica',
                cijena: '12.50',
                kategorija: 'GLAVNA_JELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                id_stavka: '69e8d73c-2b8d-4cfa-9ae5-23a5718d2b2b',
                naziv_stavka: 'Ćevapi s lepinjom',
                cijena: '10.00',
                kategorija: 'GLAVNA_JELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                id_stavka: '7a5d89ec-3eb8-4f41-bf1e-432e1f6c57d3',
                naziv_stavka: 'Mješano meso na žaru',
                cijena: '15.00',
                kategorija: 'GLAVNA_JELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                id_stavka: '8b6fa7cd-4f57-4e42-88f8-9852e9f7d671',
                naziv_stavka: 'Svinjski kotleti',
                cijena: '14.50',
                kategorija: 'GLAVNA_JELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                id_stavka: '9c7e2e0a-598a-4f11-9f94-4f1e7c87d12e',
                naziv_stavka: 'Janjetina',
                cijena: '18.00',
                kategorija: 'GLAVNA_JELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                id_stavka: 'af8b3a2b-6c3e-4f51-8b3f-5c3e7d8a9423',
                naziv_stavka: 'Odojak',
                cijena: '16.50',
                kategorija: 'GLAVNA_JELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                id_stavka: 'a2d0ecff-b4c2-4d63-8fe2-4a53a587c893',
                naziv_stavka: 'Pečena patka',
                cijena: '17.00',
                kategorija: 'GLAVNA_JELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                id_stavka: '82d9512e-2aa7-48d4-8f18-d5f25bc45f55',
                naziv_stavka: 'Gulaš',
                cijena: '10.50',
                kategorija: 'GLAVNA_JELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                id_stavka: '39a58831-9c85-47bb-9883-3bb89aa0dc6c',
                naziv_stavka: 'Pašticada',
                cijena: '16.00',
                kategorija: 'GLAVNA_JELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                id_stavka: '567ddbf5-bcb4-4a4f-b7b9-1fcff3f8e784',
                naziv_stavka: 'Punjena paprika',
                cijena: '11.00',
                kategorija: 'GLAVNA_JELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                id_stavka: 'cb94b9a9-4370-4f4e-bb72-65d70ff32d44',
                naziv_stavka: 'Špageti Bolognese',
                cijena: '10.00',
                kategorija: 'GLAVNA_JELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                id_stavka: 'bc230e06-7d42-4a34-8274-96e83d1d2ef1',
                naziv_stavka: 'Lazanje',
                cijena: '11.50',
                kategorija: 'GLAVNA_JELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                id_stavka: '8487b428-bf5e-4608-99f3-15cc4a44e05a',
                naziv_stavka: 'Pastrva',
                cijena: '14.00',
                kategorija: 'GLAVNA_JELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                id_stavka: 'bb47e2f2-f798-47f7-8eb2-2ee15d4b1574',
                naziv_stavka: 'Oslić',
                cijena: '12.50',
                kategorija: 'GLAVNA_JELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                id_stavka: 'c39a099a-bd5a-43c8-8ff4-f3404a2f10cb',
                naziv_stavka: 'Lignje na žaru',
                cijena: '13.00',
                kategorija: 'GLAVNA_JELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                id_stavka: 'edf30e88-aa9f-4ba9-99a8-1bce1207ac2f',
                naziv_stavka: 'Rižoto s morskim plodovima',
                cijena: '13.50',
                kategorija: 'GLAVNA_JELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                id_stavka: 'b1e8f95e-0bf7-4f6a-8e54-72610b344563',
                naziv_stavka: 'Brusketa',
                cijena: '5.50',
                kategorija: 'PREDJELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                id_stavka: 'b3a24e59-71e1-4637-b68e-ecdc512b5a24',
                naziv_stavka: 'Šopska salata',
                cijena: '6.00',
                kategorija: 'PREDJELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                id_stavka: '4c2d8e23-27fa-4df9-9dc8-3b25d8f1b218',
                naziv_stavka: 'Punjene gljive',
                cijena: '7.00',
                kategorija: 'PREDJELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                id_stavka: '5e1c9a1d-4a3e-4f2b-9444-47f1d7a6a745',
                naziv_stavka: 'Kruh s češnjakom',
                cijena: '4.50',
                kategorija: 'PREDJELA',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
        ])
    })
})
