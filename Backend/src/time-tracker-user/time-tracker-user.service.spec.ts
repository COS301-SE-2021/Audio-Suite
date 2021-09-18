import { Test, TestingModule } from '@nestjs/testing';
import { TimeTrackerUserService } from './time-tracker-user.service';

describe('TimeTrackerUserService', () => {
  let service: TimeTrackerUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeTrackerUserService],
    }).compile();

    service = module.get<TimeTrackerUserService>(TimeTrackerUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
