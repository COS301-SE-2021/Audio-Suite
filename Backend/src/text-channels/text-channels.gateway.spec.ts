import { Test, TestingModule } from '@nestjs/testing';
import { TextChannelsGateway } from './text-channels.gateway';

describe('TextChannelsGateway', () => {
  let gateway: TextChannelsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextChannelsGateway],
    }).compile();

    gateway = module.get<TextChannelsGateway>(TextChannelsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
