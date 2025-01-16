/*const request = require('supertest');
const app = require('../app'); // Import the Express app for testing

describe('GET /', () => {
    it('should return "Hello, Jenkins Pipeline!"', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello, Jenkins Pipeline!');
    });
});*/
const request = require('supertest');
const app = require('../app'); // Import the Express app for testing

describe('GET /', () => {
    it('should return "Hello, Jenkins Pipeline!"', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello, Jenkins Pipeline!');
    });
});

