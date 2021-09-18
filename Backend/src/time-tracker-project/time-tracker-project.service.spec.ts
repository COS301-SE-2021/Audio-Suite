import { Test, TestingModule } from '@nestjs/testing';
import { TimeTrackerProjectService } from './time-tracker-project.service';

describe('TimeTrackerProjectService', () => {
  let service: TimeTrackerProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeTrackerProjectService],
    }).compile();

    service = module.get<TimeTrackerProjectService>(TimeTrackerProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
