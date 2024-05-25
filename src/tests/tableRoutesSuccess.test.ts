import app from '../index'
import request from 'supertest'
import http from 'http'

let server: http.Server
const TEST_PORT = 3006

beforeAll((done) => {
    server = app.listen(TEST_PORT, () => {
        console.log(`Test server is running on port ${TEST_PORT}`)
        done()
    })
})

afterAll((done) => {
    server.close(done)
})

describe('GET /api/tables/d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e', () => {
    it('should return 200 OK and the tables data', async () => {
        const response = await request(app).get(
            `/api/tables/d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e`,
        )
        expect(response.status).toBe(200)
        expect(response.body).toStrictEqual([
            {
                br_stol: 1,
                kapacitet: 4,
                sektor: 'Centralni prostor',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                br_stol: 2,
                kapacitet: 2,
                sektor: 'Centralni prostor',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                br_stol: 3,
                kapacitet: 3,
                sektor: 'Centralni prostor',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                br_stol: 4,
                kapacitet: 4,
                sektor: 'Centralni prostor',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                br_stol: 5,
                kapacitet: 2,
                sektor: 'Prozorski kutak',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                br_stol: 6,
                kapacitet: 5,
                sektor: 'Prozorski kutak',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                br_stol: 7,
                kapacitet: 4,
                sektor: 'Prozorski kutak',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                br_stol: 8,
                kapacitet: 2,
                sektor: 'Prozorski kutak',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                br_stol: 9,
                kapacitet: 4,
                sektor: 'Krovni bar',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                br_stol: 10,
                kapacitet: 2,
                sektor: 'Krovni bar',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                br_stol: 11,
                kapacitet: 3,
                sektor: 'Krovni bar',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                br_stol: 12,
                kapacitet: 4,
                sektor: 'Krovni bar',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                br_stol: 13,
                kapacitet: 4,
                sektor: 'Vrt pod šatorom',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                br_stol: 14,
                kapacitet: 2,
                sektor: 'Vrt pod šatorom',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                br_stol: 15,
                kapacitet: 3,
                sektor: 'Vrt pod šatorom',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
            {
                br_stol: 16,
                kapacitet: 2,
                sektor: 'Vrt pod šatorom',
                id_objekt: 'd0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e',
            },
        ])
    })
})
