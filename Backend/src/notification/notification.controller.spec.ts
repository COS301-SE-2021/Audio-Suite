import { Test, TestingModule } from '@nestjs/testing';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';


describe('NotificationController', () => {
  let controller: NotificationController;

  const mockNotificationService = {
    createType: jest.fn((type) => {
      return{
        type: type,
      };
    }),

    getNotification: jest.fn((type) => {
      return{
        type: type,
      };
    }),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationController],
      providers: [NotificationService],
    }).overrideProvider(NotificationService)
      .useValue(mockNotificationService)
      .compile();

    controller = module.get<NotificationController>(NotificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

});
