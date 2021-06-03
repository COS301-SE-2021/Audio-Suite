import { Test, TestingModule } from '@nestjs/testing';
import { OfficeController } from './office.controller';
import { OfficeService } from './office.service'

describe('OfficeController', () => {
  let controller: OfficeController;

  const mockOfficeService = {

  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfficeController],
      providers: [OfficeService],
    })
    .overrideProvider(OfficeService)
    .useValue(mockOfficeService)
    .compile();

    controller = module.get<OfficeController>(OfficeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
