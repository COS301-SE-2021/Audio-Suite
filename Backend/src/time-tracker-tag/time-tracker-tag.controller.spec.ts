import { Test, TestingModule } from '@nestjs/testing';
import { TimeTrackerTagController } from './time-tracker-tag.controller';

describe('TimeTrackerTagController', () => {
  let controller: TimeTrackerTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeTrackerTagController],
    }).compile();

    controller = module.get<TimeTrackerTagController>(TimeTrackerTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
