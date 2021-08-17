import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

import { KanbanService } from './kanban.service';

describe('KanbanService', () => {
  let httpClient: HttpClient;
  let httpTestCtrl: HttpTestingController;
  let kanbanService: KanbanService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    
    httpTestCtrl = TestBed.get(HttpTestingController);
  });

  beforeEach(inject(
    [KanbanService], (service: KanbanService) => {
      kanbanService = service;
    }
  ));

  it('should be created', () => {
    expect(kanbanService).toBeTruthy();
  });
});
