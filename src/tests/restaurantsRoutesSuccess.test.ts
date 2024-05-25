import app from '../index'
import request from 'supertest'
import http from 'http'

let server: http.Server;

beforeAll((done) => {
    server = app.listen(3001, () => {
        console.log('Server is running on port 3001');
        done();
    });
});

afterAll((done) => {
    server.close(done);
});

describe('GET /api/restaurants/d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e', () => {
    it('should return 200 OK', async () => {
        const response = await request(app).get('/api/restaurants/d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e')
        expect(response.status).toBe(200)
        expect(response.body).toStrictEqual({
            id_objekt: "d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e",
            naziv_objekt: "Sunčeva Oaza",
            adresa: "Ulica Primorska 23",
            mjesto: {
                pbr: 10000,
                naziv_mjesto: "Zagreb"
            },
            br_mobitel_objekt: "092 235 4573"
        });
    });
});
