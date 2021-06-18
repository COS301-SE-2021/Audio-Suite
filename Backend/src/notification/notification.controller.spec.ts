import { Test, TestingModule } from '@nestjs/testing';
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

  //createNotificationTest

  it('should make use of createNotification for notification', () => {
    const user = {
      userID: "ID123",
      type: "verification",
      link: "audiosuite.xyz/verification",
      email: "test@audiosuite.com",
      password: "test",
    }
    
    expect(controller.createNotification(user.userID,user.type, user.link, user.email, user.password)).toStrictEqual({
      userID: user.userID,
      type: user.type,
      link: user.link,
      email: user.email,
      password: "test"
    })
  })

});
