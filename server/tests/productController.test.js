const request = require('supertest');
const app = require('../api/server');

describe('GET /api/products', () => {
    it('deve retornar status 200', async () => {
        const res = await request(app).get('/api/products');
        expect(res.statusCode).toBe(200);
    });
});