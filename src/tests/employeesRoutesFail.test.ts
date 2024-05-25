import app from '../index';
import request from 'supertest';
import http from 'http';

let server: http.Server;
const TEST_PORT = 3004;

beforeAll((done) => {
    server = app.listen(TEST_PORT, () => {
        console.log(`Test server is running on port ${TEST_PORT}`);
        done();
    });
});

afterAll((done) => {
    server.close(done);
});

describe('GET /api/employees/d0f5bcf9-30f8-4ec2-b4d5-9457ce/waiters/shift', () => {
    it('should return 400 Bad request and the employee data', async () => {
        const response = await request(app).get(`/api/employees/d0f5bcf9-30f8-4ec2-b4d5-9457ce/waiters/shift`);
        expect(response.status).toBe(400)
        expect(response.body).toStrictEqual({ message: 'Bad Request' })
    });
});
