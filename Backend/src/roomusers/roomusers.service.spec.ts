import { Test, TestingModule } from '@nestjs/testing';
import { RoomusersService } from './roomusers.service';

describe('RoomusersService', () => {
  let service: RoomusersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomusersService],
    }).compile();

    service = module.get<RoomusersService>(RoomusersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
