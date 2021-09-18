import { Test, TestingModule } from '@nestjs/testing';
import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  const mockMessageService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageService],
    }).overrideProvider(MessageService)
    .useValue(mockMessageService)
    .compile();

    service = module.get<MessageService>(MessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
