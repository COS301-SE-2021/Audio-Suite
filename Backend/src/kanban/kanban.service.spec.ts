import { Test, TestingModule } from '@nestjs/testing';
import { KanbanService } from './kanban.service';

describe('KanbanService', () => {
  let service: KanbanService;

  const mockKanbanService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KanbanService],
    }).overrideProvider(KanbanService)
    .useValue(mockKanbanService)
    .compile();

    service = module.get<KanbanService>(KanbanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
