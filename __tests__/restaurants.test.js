const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const UserService = require('../lib/services/UserService');

//Dummy user
const mockUser = {
  firstName: 'Test',
  lastName: 'User',
  email: 'test@example.com',
  password: '12345',
};

describe('restaurants routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  afterAll(() => {
    pool.end();
  });

  it('GET api/v1/resturants', async () => {
    const resp = await request(app).get('/api/v1/restaurants');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot('');
  });
});
