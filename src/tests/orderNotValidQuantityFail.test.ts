import app from '../index'
import request from 'supertest'

describe('POST /api/orders/d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e', () => {
    it('should return 400 Bad Request with a message "kolicina must be between 1 and 10"', async () => {
        const orderData = {
            br_stol: 1,
            items: [
                {
                    id_stavka: 'a1e8f95e-0bf7-4f6a-8e54-72610b344563',
                    kolicina: 13,
                },
                {
                    id_stavka: 'a3a24e59-71e1-4637-b68e-ecdc512b5a24',
                    kolicina: 2,
                },
            ],
        }

        const response = await request(app)
            .post('/api/orders/d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e')
            .send(orderData)
            .expect(400)
        expect(response.body).toStrictEqual({
            message: 'kolicina must be between 1 and 10',
        })
    })
})
