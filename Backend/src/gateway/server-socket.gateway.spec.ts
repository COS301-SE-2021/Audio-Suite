import { Test, TestingModule } from '@nestjs/testing';
import { ServerSocketGateway } from './server-socket.gateway';

describe('ServerSocketGateway', () => {
  let gateway: ServerSocketGateway;

  const mockServerSocketGatewayService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServerSocketGateway],
    }).overrideProvider(ServerSocketGateway)
    .useValue(mockServerSocketGatewayService)
    .compile();

    gateway = module.get<ServerSocketGateway>(ServerSocketGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
