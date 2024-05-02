const request = require('supertest');
const app = require('../app');

describe('GET /api/users', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
  });
});
// Example test file: user.test.js

const { getUsers, getUserById } = require('../src/user');

test('should fetch all users', async () => {
 const users = await getUsers();
 expect(users).toBeDefined();
 expect(Array.isArray(users)).toBe(true);
 expect(users.length).toBeGreaterThan(0);
});

test('should fetch a user by ID', async () => {
    const userId = '123'; // Replace '123' with an actual user ID from your database
    const user = await getUserById(userId);
    expect(user).toBeDefined();   
  // Write your test case here to verify the behavior of getUserById function
});
