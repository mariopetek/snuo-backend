import app from '../index'
import request from 'supertest'

describe('POST /api/orders/d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e', () => {
    it('should return 400 Bad Request with a message "id_stavka is not a valid item in this restaurant"', async () => {
        const orderData = {
            br_stol: 1,
            items: [
                {
                    id_stavka: '1cd81e45-caf3-4791-b8b5-34a0c8ff60c2',
                    kolicina: 1,
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
            message: 'id_stavka is not a valid item in this restaurant',
        })
    })
})
