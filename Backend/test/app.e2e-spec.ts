import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';


const app = 'http://localhost:3000';

var jwtFromResponse: string = "";

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
  // it('should register a user', () => {
  //   const user = {
  //     firstName: 'John',
  //     lastName: 'White',
  //     userName: 'JohnWhite',
  //     email: 'johnwhite@gmail.com',
  //     password: 'Password!123'
  //   };

  //   return request(app)
  //     .post('/api/register')
  //     .set('Accept', 'application/json')
  //     .send(user)
  //     .expect(HttpStatus.CREATED);
  // });

  // Registering a user that alreay exists.
  it('should make use of registerUser from User and return a 500 "Internal Server Error" since the user John White has already been registered', () => {
    const user = {
      firstName: 'John',
      lastName: 'White',
      userName: 'JohnWhite',
      email: 'johnwhite@gmail.com',
      password: 'Password!123'
    };

    return request(app)
      .post('/api/register')
      .set('Accept', 'application/json')
      .send(user)
      .expect(HttpStatus.INTERNAL_SERVER_ERROR);
  });

  // Loging in a user that exists
  it('should make use of loginUser from User with John Whites details and return successfully.', () => {
    const user ={
      email: 'johnwhite@gmail.com',
      password: 'Password!123'
    };

    return request(app)
    .post('/api/login')
    .set('Accept', 'application/json')
    .send(user)
    .expect(({body}) => {
      expect(body.response).toStrictEqual('Success');
      jwtFromResponse=body.jwt;
      const login = request(app).post('')
    })
    .expect(HttpStatus.CREATED);
  });


  // Logging in a user that doesn't exist
  it('should make use of loginUser from User and return 400 "Bad Request" since user has not been registered', () => {
    const user = {
      email: 'userdoesntexist@gmail.com',
      password: 'ISE!500'
    };

    return request(app)
    .post('/api/login')
    .set('Accept', 'application/json')
    .send(user)
    .expect(HttpStatus.BAD_REQUEST);
  });

  // Logging in and returning user details (by use of JWT)
  it('should login user John White and make use of userDetails from User.', () => {
    const user ={
      email: 'johnwhite@gmail.com',
      password: 'Password!123'
    };

    return request(app)
    .post('/api/login')
    .set('Accept', 'application/json')
    .send(user)
    .expect(({body}) => {
      expect(body.response).toStrictEqual('Success');
      jwtFromResponse=body.jwt;
      const userDetails = request(app)
                          .post('/api/user/details')
                          .set('Accept', 'application/json')
                          .send(jwtFromResponse)
                          .expect(HttpStatus.CREATED);
    })
    .expect(HttpStatus.CREATED);
  });
});

describe('NOTIFICATION', () => {
  var idFromResponse: string = "";
  // Makes use of createNotification
  it('should make use of createNotification from Notifications for John White.', () => {
    const user ={
      email: 'johnwhite@gmail.com',
      password: 'Password!123'
    };

    return request(app)
    .post('/api/login')
    .set('Accept', 'application/json')
    .send(user)
    .expect(({body}) => {
      expect(body.response).toStrictEqual('Success');
      jwtFromResponse=body.jwt;
      const userDetails = request(app)
                          .post('/api/user/details')
                          .set('Accept', 'application/json')
                          .send(jwtFromResponse)
                          .expect(({body}) => {
                            idFromResponse=body.userID;
                            const createNotif = request(app)
                                                .post('/api/notifications/createNotification')
                                                .set('Accept', 'application/json')
                                                .send({
                                                  userID: idFromResponse,
                                                  type: "newNotification",
                                                  link: "audiosuit.xyz/newNotification",
                                                  email: user.email,
                                                  password: user.password
                                                })
                                                .expect(HttpStatus.CREATED)
                          })
                          .expect(HttpStatus.CREATED);
    })
    .expect(HttpStatus.CREATED);
  });

  // makes use of sendEmail
  it('should make use of sendEmail from Notifications for John White.', () => {
    const body = {
      email: 'johnwhite@gmail.com',
      type: 'newNotification',
      payload: 'This is a newNotification'
    }

    return request(app)
      .post('/api/notifications/sendEmail')
      .set('Accept', 'application/json')
      .send(body)
      .expect(HttpStatus.CREATED);
  });
});
