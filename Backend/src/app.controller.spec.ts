import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';

describe('AppController', () => {
  let appController: AppController;
  let spyService: UserService;

  beforeEach(async () => {
    const ApiServiceProvider = {
      provide: UserService,
      useFactory: async () => ({
        registerUser: await jest.fn(user => {
          return{
            id: Date.now(),
            ...user
          }
        }),
      }),
    };
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, ApiServiceProvider],
    }).compile();

    appController = app.get<AppController>(AppController);
    spyService = app.get<UserService>(UserService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('register', () => {
    it('should retrieve registerUser for a user', async () => {
      const firstName = 'Joe';
      const secondName = 'Foo';
      const userName = 'JFoo';
      const email = 'jfoo@gmail.com';
      const password = 'pass123';

      const user = await spyService.registerUser(firstName, secondName, userName, email, password);
      console.log(user);

      expect(await spyService.registerUser(firstName, secondName, userName, email, password)).toBe({
        id: expect.any(Number),
        firstName: 'Joe',
        secondName: 'Foo',
        userName: 'JFoo',
        email: 'jfoo@gmail.com',
        password: expect.anything()
      });
    });
  });
});
