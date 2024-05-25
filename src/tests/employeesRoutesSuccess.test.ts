import app from '../index';
import request from 'supertest';
import http from 'http';

let server: http.Server;
const TEST_PORT = 3003;

beforeAll((done) => {
    server = app.listen(TEST_PORT, () => {
        console.log(`Test server is running on port ${TEST_PORT}`);
        done();
    });
});

afterAll((done) => {
    server.close(done);
});

describe('GET /api/employees/d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e/waiters/shift', () => {
    it('should return 200 OK and the employee data', async () => {
        const response = await request(app).get(`/api/employees/d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e/waiters/shift`);
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual([
            {"id_zaposlenik":"6a5fa743-faad-462c-b5f2-3e3e7c0cf001","ime":"Katarina","prezime":"Novak","email":"katarina.novak@sunceva-oaza.com","smjena":"POPODNEVNA","id_objekt":"d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e"},
            {"id_zaposlenik":"ad0e302e-47c0-4d1f-b1a6-1677df1d80e3","ime":"Nikola","prezime":"Pavić","email":"nikola.pavic@sunceva-oaza.com","smjena":"POPODNEVNA","id_objekt":"d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e"},
            {"id_zaposlenik":"fb736dd3-63ae-42e7-8d6a-1d38ee5c3b11","ime":"Kristina","prezime":"Marković","email":"kristina.markovic@sunceva-oaza.com","smjena":"POPODNEVNA","id_objekt":"d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e"}
        ]);
    });
});
