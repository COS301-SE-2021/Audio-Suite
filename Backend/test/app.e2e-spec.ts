import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';


const app = 'http://localhost:3000';

describe('ROOT', () => {
  it('should return Hello World', () => {
    return request(app)
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});

describe('USER', () => {
  it('should register a user', () => {
    const user = {
      firstName: 'John',
      lastName: 'Moore',
      userName: 'JohnMoore',
      email: 'johnmoore@gmail.com',
      password: 'Password!123'
    };

    return request(app)
      .post('/api/register')
      .set('Accept', 'application/json')
      .send(user)
      .expect(HttpStatus.CREATED);
  });
});
