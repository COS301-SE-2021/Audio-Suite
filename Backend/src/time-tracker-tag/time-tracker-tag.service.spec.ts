import { Test, TestingModule } from '@nestjs/testing';
import { TimeTrackerTagService } from './time-tracker-tag.service';

describe('TimeTrackerTagService', () => {
  let service: TimeTrackerTagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeTrackerTagService],
    }).compile();

    service = module.get<TimeTrackerTagService>(TimeTrackerTagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
