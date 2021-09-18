import { Test, TestingModule } from '@nestjs/testing';
import { TimeTrackerUserController } from './time-tracker-user.controller';

describe('TimeTrackerUserController', () => {
  let controller: TimeTrackerUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeTrackerUserController],
    }).compile();

    controller = module.get<TimeTrackerUserController>(TimeTrackerUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
