import app from '../index'
import request from 'supertest'
import http from 'http'

let server: http.Server

beforeAll((done) => {
    server = app.listen(3002, () => {
        console.log('Server is running on port 3002')
        done()
    })
})

afterAll((done) => {
    server.close(done)
})

describe('GET /api/restaurants/123', () => {
    it('should return 400', async () => {
        const response = await request(app).get('/api/restaurants/123')
        expect(response.status).toBe(400)
        expect(response.body).toStrictEqual({ message: 'Bad Request' })
    })
})
