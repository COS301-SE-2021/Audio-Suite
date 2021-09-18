import { Test, TestingModule } from '@nestjs/testing';
import { TimeTrackerProjectController } from './time-tracker-project.controller';

describe('TimeTrackerProjectController', () => {
  let controller: TimeTrackerProjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeTrackerProjectController],
    }).compile();

    controller = module.get<TimeTrackerProjectController>(TimeTrackerProjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
