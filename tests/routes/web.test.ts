import request from 'supertest';
import app from '../../src/app';

describe('WebRoutes', () => {
  it('GET / should respond JSON message', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
      message: '🚀 Express.js is running.',
    });
  });
});
