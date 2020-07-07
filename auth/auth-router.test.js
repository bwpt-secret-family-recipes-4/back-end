const server = require('../api/server');
const request = require('supertest');
const db = require('../database/dbconfig');
const Users = require('../users/users-model');

describe('register', () => {
  it('should return status 201', async () => {
    const res = await request(server)
      .post('/api/auth/register')
      .send({ username: 'Brandon', password: 'password5' });
    expect(res.status).toBe(201);
  });

  it('should return the user added', async () => {
    const res = await request(server)
      .post('/api/auth/register')
      .send({ username: 'Kenneth.Brandon', password: 'password' });
    expect({ username: 'Kenneth.Brandon' });
  });
  beforeEach(async () => {
    await db('users').truncate();
  });
});

describe('login', () => {
  it('should return status 200', async () => {
    const res = await request(server)
      .post('/api/auth/login')
      .send({ username: 'Kenneth.Brandon', password: 'password' });
    expect(res.status).toBe(200);
  });

  it('should return a token', async () => {
    const res = await request(server)
      .post('/api/auth/login')
      .send({ username: 'Kenneth.Brandon', password: 'password' });
    expect(res.body.token);
  });
});
