import { Test, TestingModule } from '@nestjs/testing';
import { ServerSocketGateway } from './server-socket.gateway';

describe('ServerSocketGateway', () => {
  let gateway: ServerSocketGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServerSocketGateway],
    }).compile();

    gateway = module.get<ServerSocketGateway>(ServerSocketGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
