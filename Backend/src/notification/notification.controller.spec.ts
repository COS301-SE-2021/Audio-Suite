import { Test, TestingModule } from '@nestjs/testing';
import { type } from 'os';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';

describe('NotificationController', () => {
  let controller: NotificationController;

  const mockNotificationService = {
    createNotification: jest.fn((userID, type, link, email, password) => {
      if(password == "test"){
        return{
          payload: type,
          userID: userID,
          readDateTime: false,
          createdDateTime: Date.now(),
          notificationType: type,
          id: 1,
        };
      }
    }),

    createOTP: jest.fn((emailAddress, userName) => {
      const crypto = require("crypto");
      const n = crypto.randomInt(0, 1000000);
      const OTP = n.toString().padStart(6, "0");
      return{
        success: "success",
        otp: OTP
      };
    })
    
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationController],
      providers: [NotificationService],
    })
      .overrideProvider(NotificationService)
      .useValue(mockNotificationService)
      .compile();

    controller = module.get<NotificationController>(NotificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  //createNotification Test

  it('should make use of createNotification for notification', async () => {
    const user = {
      userID: 'ID123',
      type: 'verification',
      link: 'audiosuite.xyz/verification',
      email: 'test@audiosuite.com',
      password: 'test',
    }
    
    expect(await controller.createNotification(user.userID,user.type, user.link, user.email, user.password)).toStrictEqual({
      payload: user.type,
      userID: user.userID,
      readDateTime: false,
      createdDateTime: expect.anything(),
      notificationType: user.type,
      id: expect.any(Number),
    });
  });

  // createOTP Test
  it('should make use of createOTP through sendVerification in Controller for notification', async () => {
    const user = {
      emailAddress: 'test@audiosuite.com',
      userName: 'Test123',
    }

    expect(await controller.sendVarification(user.emailAddress, user.userName)).toStrictEqual({
      success: "success",
      otp: expect.any(String),
    });
  });
});
