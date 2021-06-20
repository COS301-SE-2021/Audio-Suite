import { Test, TestingModule } from '@nestjs/testing';
import { RoomService } from './room.service';

describe('RoomService', () => {
  let service: RoomService;
  
  const mockRoomService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomService],
    }).overrideProvider(RoomService)
    .useValue(mockRoomService)
    .compile();

    service = module.get<RoomService>(RoomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
