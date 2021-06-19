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
  // Registering a user that doesn't exist.
  it('should register a user', () => {
    const user = {
      firstName: 'Bob',
      lastName: 'White',
      userName: 'BobWhite',
      email: 'bobwhite@gmail.com',
      password: 'Password!123'
    };

    return request(app)
      .post('/api/register')
      .set('Accept', 'application/json')
      .send(user)
      .expect(HttpStatus.CREATED);
  });

  // Registering a user that alreay exists.
  it('should return a 500 "Internal Server Error" since user has already been registered', () => {
    const user = {
      firstName: 'Bob',
      lastName: 'White',
      userName: 'BobWhite',
      email: 'bobwhite@gmail.com',
      password: 'Password!123'
    };

    return request(app)
      .post('/api/register')
      .set('Accept', 'application/json')
      .send(user)
      .expect(HttpStatus.INTERNAL_SERVER_ERROR);
  });

  // Loging in a user that exists
  it('should successfully login user', () => {
    const user ={
      email: 'bobwhite@gmail.com',
      password: 'Password!123'
    };

    return request(app)
    .post('/api/login')
    .set('Accept', 'application/json')
    .send(user)
    .expect(HttpStatus.CREATED);
  });

  // Loging in a user that doesn't exist
  it('should return 403 "Forbidden" since user has not been registered', () => {
    const user = {
      email: 'userdoesntexist@gmail.com',
      password: 'ISE!500'
    };

    return request(app)
    .post('api/login')
    .set('Accept', 'application/json')
    .send(user)
    .expect(HttpStatus.FORBIDDEN);
  });
});
