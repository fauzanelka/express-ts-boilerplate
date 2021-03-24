import request from 'supertest';
import app from '../../src/app';

describe('WebRoutes', () => {
  it('GET / should respond JSON message', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);

    const responseJson = JSON.parse(response.body);

    expect(responseJson).toBe({
      message: `🚀 Express.js is listening on port ${process?.env?.PORT || 3000}.`,
    });
  });
});
