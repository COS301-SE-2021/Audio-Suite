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

  it('should create a new card', () => {
    const expectedResponse = {
      Response: "Success",
      Card: {
        id: 1,
        officeID: 1,
        listName: 'To Do',
        cardID: '1',
        cardMessage: 'Test Message'
      }
    };

    const jwt = 'ghsjkghsajkghajklshhsakjas';
    const officeID = 1;
    const listName = 'To Do';
    const cardID = '1';
    const cardMessage = 'Test message';
    kanbanService.createCard(jwt, officeID, listName, cardID, cardMessage).subscribe((response) => {
      expect(response).toBe(expectedResponse, 'should compare expected response to actual response');
    });

    const req = httpTestCtrl.expectOne(kanbanService.baseUrl + '/api/kanban/createCard');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(expectedResponse);
  });

  it('should delete an existing card', () => {
    const expectedResponse = {
      Response: "Success",
      RemovedCard: {
        id: 1,
        officeID: 1,
        listName: 'To Do',
        cardID: '1',
        cardMessage: 'Test Message'
      }
    };

    const jwt = 'ghsjkghsajkghajklshhsakjas';
    const officeID = 1;
    const cardID = '1';
    kanbanService.deleteCard(jwt, officeID, cardID).subscribe((response) => {
      expect(response).toBe(expectedResponse, 'should compare expected response to actual response');
    });

    const req = httpTestCtrl.expectOne(kanbanService.baseUrl + '/api/kanban/deleteCard');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(expectedResponse);
  });

  it('should get an existing offices cards', () => {
    const expectedResponse = {
      Response: "Success",
      Cards: [
        {
          id: 1,
          officeID: 1,
          listName: 'To Do',
          cardID: '1',
          cardMessage: 'Test Message'
        }
      ]
    };

    const jwt = 'ghsjkghsajkghajklshhsakjas';
    const officeID = 1;
    kanbanService.getAllCards(jwt, officeID).subscribe((response) => {
      expect(response).toBe(expectedResponse, 'should compare expected response to actual response');
    });

    const req = httpTestCtrl.expectOne(kanbanService.baseUrl + '/api/kanban/getAllCards');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(expectedResponse);
  });
});
