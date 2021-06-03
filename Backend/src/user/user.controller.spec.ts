import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;

  const mockUserService = {
    registerUser: jest.fn((firstName, lastName, userName, email, password) => {
      return {
        id: Date.now(),
        firstName: firstName,
        password: password,
        email: email,
        userName: userName,
        lastName: lastName,
      };
    }),
    loginUser: jest.fn((email, password) => {
      return {
        email: email,
        password: password,
        response: "Success",
        jwt: Math.random(),
      };
    })

  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(mockUserService)
      .compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should make use of registerUser for a user', async () => {
    const user = {
      firstName: 'Joe',
      lastName: 'Foo',
      userName: 'JFoo',
      email: 'jfoo@gmail.com',
      password: 'pass123'
    }

    expect(await controller.registerUser(user.firstName, user.lastName, user.userName, user.email, user.password)).toStrictEqual({
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      password: expect.anything(), // we say expect.anything() since the password is going to be hashed.
      id: expect.any(Number),
    });
  });

  it('should make use of loginUser for a user', async () =>{
    const user = {
      email: 'jfoo@gmail.com',
      password: 'pas123'
    }

    expect(await controller.loginUser(user.email, user.password)).toStrictEqual({
      email: user.email,
      password: expect.anything(),
      response: "Success",
      jwt: expect.anything()
    })
  })

});
