const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Bug = require('../models/Bug');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/test_bugtracker');
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe ('Bug API', () => {
  it('should create a bug', async () => {
    const res = await request(app).post('/api/bugs').send({ title: 'Sample bu'});
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('sample bug');
  });

  it('should get all bugs', async () => {
    const res = await request(app).get('/api/bugs');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body).toBeTruthy());
  });
});