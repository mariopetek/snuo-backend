import app from '../index'
import request from 'supertest'

describe('POST /api/orders/d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e', () => {
  it('should be konobar number defined', async () => {
    const orderData = {
      "br_stol": 1,
      items: [
        {
          id_stavka: "a1e8f95e-0bf7-4f6a-8e54-72610b344563",
          kolicina: 2
        },
        {
          id_stavka: "c39a099a-bd5a-43c8-8ff4-f3404a2f10cb",
          kolicina: 3
        }
      ]
    };

    const response = await request(app)
      .post('/api/orders/d0f5bcf9-30f8-4ec2-b4d5-9457cf08d80e')
      .send(orderData)
      .expect(400); 
      expect(response.body).toStrictEqual({ "message": "id_konobar is required"})
  });
});
