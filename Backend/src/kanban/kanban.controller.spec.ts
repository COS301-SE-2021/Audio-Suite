import { Test, TestingModule } from '@nestjs/testing';
import { KanbanController } from './kanban.controller';
import { KanbanService } from './kanban.service';

describe('KanbanController', () => {
  let controller: KanbanController;

  const mockKanbanService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KanbanController],
      providers: [KanbanService]
    })
    .overrideProvider(KanbanService)
    .useValue(mockKanbanService)
    .compile();

    controller = module.get<KanbanController>(KanbanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
