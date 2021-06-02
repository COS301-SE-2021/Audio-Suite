import { Test, TestingModule } from '@nestjs/testing';
import { OfficeusersService } from './officeusers.service';

describe('OfficeusersService', () => {
  let service: OfficeusersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfficeusersService],
    }).compile();

    service = module.get<OfficeusersService>(OfficeusersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
