import { Test, TestingModule } from '@nestjs/testing';
import { RoomUsersService } from './roomusers.service';

describe('RoomusersService', () => {
  let service: RoomUsersService;

  const mockRoomUsersService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomUsersService],
    }).overrideProvider(RoomUsersService)
    .useValue(mockRoomUsersService)
    .compile();

    service = module.get<RoomUsersService>(RoomUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
