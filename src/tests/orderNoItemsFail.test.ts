import app from '../index'
import request from 'supertest'

describe('POST /api/orders/d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e', () => {
    it('should return 400 Bad Request with a message "items is required"', async () => {
        const orderData = {
            br_stol: 1,
        }

        const response = await request(app)
            .post('/api/orders/d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e')
            .send(orderData)
            .expect(400)
        expect(response.body).toStrictEqual({ message: 'items is required' })
    })
})
