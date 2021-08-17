import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { Office } from 'src/office/office.entity';


const app = 'http://localhost:3001';

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
  //     email: 'JohnWhite@gmail.com',
  //     password: 'Password!123'
  //   };

  //   return request(app)
  //     .post('/api/register')
  //     .set('Accept', 'application/json')
  //     .send(user)
  //     .expect(HttpStatus.CREATED);
  // });

  // Registering a user that alreay exists.
  // it('should make use of registerUser from User and return a 500 "Internal Server Error" since the user John White has already been registered', () => {
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
  //     .expect(HttpStatus.BAD_REQUEST);
  // });

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
                          .expect(({body}) => {
                            expect(body.id).toHaveReturned();
                            expect(body.firstName).toEqual('John')
                            expect(body.lastName).toEqual('White')
                            expect(body.userName).toEqual('JohnWhite3');
                            expect(body.email).toEqual('johnwhite3@gmail.com');
                          })
                          .expect(HttpStatus.CREATED);
    })
    .expect(HttpStatus.CREATED);
  });

  // Trying to getUser details with an invalid jwt
  it('should try get user details with an invalid jwt', () => {
    const jwt = {
      //Random invalid jwt
      jwt: "kl54353sgahklghlks345gdygh435askl54353ahgflk"
    }

    const userDetails = request(app)
    .post('/api/user/details')
    .set('Accept', 'application/json')
    .send(jwt)
    .expect(HttpStatus.UNAUTHORIZED);
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
                                                  invite: "audiosuite.xyz/newNotification",
                                                  userName: 'JohnWhite2',
                                                  emailAddress: user.email,
                                                  password: user.password
                                                })
                                                .expect(HttpStatus.CREATED)
                          })
                          .expect(HttpStatus.CREATED);
    })
    .expect(HttpStatus.CREATED);
  });

  // makes use of sendInviteCode
  it('should make use of sendInviteCode from Notifications for John White.', () => {
    const body = {
      emailAddress: 'johnwhite@gmail.com',
      name: 'John White',
      inviteCode: 'gfoisdhg89365hshg98327598n'
    }

    return request(app)
      .post('/api/notifications/sendInviteCode')
      .set('Accept', 'application/json')
      .send(body)
      .expect(({body}) => {
        expect(body.Response).toStrictEqual('Success');
        expect(body.Message).toStrictEqual('Invite code sent successfully');
      })
      .expect(HttpStatus.CREATED);
  });

  // makes use of sendVerification
  it('should make use of sendVerification from Notifications for John White.', () => {
    const user = {
      emailAddress: 'johnwhite@gmail.com',
      userName: 'JohnWhite2'
    }

    return request(app)
    .post('/api/notifications/sendVerification')
    .set('Accept', 'application/json')
    .send(user)
    .expect(({body}) => {
      expect(body.success).toStrictEqual('success');
    })
    .expect(HttpStatus.CREATED);
  });

  //makes use of retrieveNotification
  it('should make use of retrieveNotification from Notifications for John White', () => {
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
                            const retrieveNotif = request(app)
                                                .post('/api/notifications/retrieveNotification')
                                                .set('Accept', 'application/json')
                                                .send({
                                                  userID: idFromResponse,
                                                  unread: true,
                                                  password: "test"
                                                })
                                                .expect(HttpStatus.CREATED)
                          })
                          .expect(HttpStatus.CREATED);
    })
    .expect(HttpStatus.CREATED);    
  });

});

describe('OFFICE', () => {
  var idFromResponse: string = "";

  // registering a new office
  // it('should make use of registerOffice from Office to register a new office.', () => {
  //   const user ={
  //     email: 'johnwhite@gmail.com',
  //     password: 'Password!123'
  //   };

  //   return request(app)
  //   .post('/api/login')
  //   .set('Accept', 'application/json')
  //   .send(user)
  //   .expect(({body}) => {
  //     expect(body.response).toStrictEqual('Success');
  //     jwtFromResponse=body.jwt;
  //     const createOffice = request(app)
  //                         .post('/office/register')
  //                         .set('Accept', 'application/json')
  //                         .send({
  //                           name: "newOffice",
  //                           jwt: jwtFromResponse
  //                         })
  //                         .expect(HttpStatus.CREATED);
  //   })
  //   .expect(HttpStatus.CREATED);
  // });

  // attempt to register an office that already exists
  // it('should make use of registerOffice from Office to register a new office and return a 400 "Bad Request" since newOffice has already been registered.', () => {
  //   const user ={
  //     email: 'johnwhite@gmail.com',
  //     password: 'Password!123'
  //   };

  //   return request(app)
  //   .post('/api/login')
  //   .set('Accept', 'application/json')
  //   .send(user)
  //   .expect(({body}) => {
  //     expect(body.response).toStrictEqual('Success');
  //     jwtFromResponse=body.jwt;
  //     const createOffice = request(app)
  //                         .post('/api/office/register')
  //                         .set('Accept', 'application/json')
  //                         .send({
  //                           name: "Pegasus",
  //                           jwt: jwtFromResponse
  //                         })
  //                         .expect(({body}) => {
  //                           expect(body.statusCode).toStrictEqual('400');
  //                           expect(body.message).toStrictEqual('Office with this name already exists.');
  //                         })
  //                         .expect(HttpStatus.BAD_REQUEST);
  //   })
  //   .expect(HttpStatus.CREATED);
  // });

  // attempt to join an office
  it('should make use of joinInvite from Office', () => {
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
      const createOffice = request(app)
                          .post('/office/joinInvite')
                          .set('Accept', 'application/json')
                          .send({
                            invite: "40f81a47a99cb26db76b261f1e34c2ed",
                            jwt: jwtFromResponse
                          })
                          .expect(HttpStatus.CREATED);
    })
    .expect(HttpStatus.CREATED);
  });

  // attempt to join an office with incorrect invite code
  // it('should make use of joinInvite from Office and return a 400 "Bad Request" since the invite code invalid', () => {
  //   const user ={
  //     email: 'johnwhite@gmail.com',
  //     password: 'Password!123'
  //   };

  //   return request(app)
  //   .post('/api/login')
  //   .set('Accept', 'application/json')
  //   .send(user)
  //   .expect(({body}) => {
  //     expect(body.response).toStrictEqual('Success');
  //     jwtFromResponse=body.jwt;
  //     const createOffice = request(app)
  //                         .post('/office/joinInvite')
  //                         .set('Accept', 'application/json')
  //                         .send({
  //                           invite: "3b942b255819aaf747b659b76ae3df",
  //                           jwt: jwtFromResponse
  //                         })
  //                         .expect(HttpStatus.BAD_REQUEST);
  //   })
  //   .expect(HttpStatus.CREATED);
  // });

});

describe('ROOM', () => {

  //Lets begin with registering a room in an office.
  it('should register a new room in an existing office.', () => {
    const user ={
      email: 'JohnWhite@gmail.com',
      password: 'Password!123'
    };

    const office = {
      officeID: 37
    };

    return request(app)
    .post('/api/login')
    .set('Accept', 'application/json')
    .send(user)
    .expect(({body}) => {
      expect(body.response).toStrictEqual('Success');
      jwtFromResponse=body.jwt;
      const validOffice = request(app)
                          .post('/office/officeFromOfficeID')
                          .set('Accept', 'application/json')
                          .send({
                            jwt: jwtFromResponse,
                            officeID: office.officeID
                          })
                          .expect(({body}) => {
                            const createRoom = request(app)
                                              .post('/room/register')
                                              .set('Accept', 'application/json')
                                              .send({
                                                jwt: jwtFromResponse,
                                                officeID: office.officeID,
                                                roomName: "newRoom",
                                                xCoordinate: 10,
                                                yCoordinate: 10,
                                                width: 5,
                                                height: 5
                                              })
                                              .expect(HttpStatus.CREATED);
                          })
                          .expect(HttpStatus.CREATED);
      })
      .expect(HttpStatus.CREATED);
  });

  it('should register a new room in an office and return a 400 "Bad Request" since the officeID does not exist.', () => {
    const user ={
      email: 'JohnWhite@gmail.com',
      password: 'Password!123'
    };

    const office = {
      officeID: 999
    };

    return request(app)
    .post('/api/login')
    .set('Accept', 'application/json')
    .send(user)
    .expect(({body}) => {
      expect(body.response).toStrictEqual('Success');
      jwtFromResponse=body.jwt;
      const validOffice = request(app)
                          .post('/office/officeFromOfficeID')
                          .set('Accept', 'application/json')
                          .send({
                            jwt: jwtFromResponse,
                            officeID: office.officeID
                          })
                          .expect(({body}) => {
                            const createRoom = request(app)
                                              .post('/room/register')
                                              .set('Accept', 'application/json')
                                              .send({
                                                jwt: jwtFromResponse,
                                                officeID: body.id,
                                                roomName: "newRoom",
                                                xCoordinate: 10,
                                                yCoordinate: 10,
                                                width: 5,
                                                height: 5
                                              })
                                              .expect(HttpStatus.BAD_REQUEST);
                          })
                          .expect(HttpStatus.CREATED);
      })
      .expect(HttpStatus.CREATED);
  });

  //Lets delete a room in an office.
  it('should delete a given room in an existing office.', () => {
    const user ={
      email: 'JohnWhite@gmail.com',
      password: 'Password!123'
    };
  
    const office = {
      officeID: 37
    };

    const room = {
      roomName: "newRoom"
    }
  
    return request(app)
    .post('/api/login')
    .set('Accept', 'application/json')
    .send(user)
    .expect(({body}) => {
        expect(body.response).toStrictEqual('Success');
        jwtFromResponse=body.jwt;
        const validOffice = request(app)
                            .post('/office/officeFromOfficeID')
                            .set('Accept', 'application/json')
                            .send({
                              jwt: jwtFromResponse,
                              officeID: office.officeID
                            })
                            .expect(({body}) => {
                              const deleteRoom = request(app)
                                                .post('/room/delete')
                                                .set('Accept', 'application/json')
                                                .send({
                                                  jwt: jwtFromResponse,
                                                  officeID: body.id,
                                                  roomName: room.roomName
                                                })
                                                .expect(HttpStatus.CREATED);
                            })
                            .expect(HttpStatus.CREATED);
      })
      .expect(HttpStatus.CREATED);
  });

});