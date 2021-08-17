import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

import { OfficeRoomService } from './office-room.service';

describe('OfficeRoomService', () => {
  let httpClient: HttpClient;
  let httpTestCtrl: HttpTestingController;
  let officeRoomService: OfficeRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestCtrl = TestBed.get(HttpTestingController);
  });

  beforeEach(inject(
    [OfficeRoomService], (service: OfficeRoomService) => {
      officeRoomService = service;
    }
  ));

  it('should be created', () => {
    expect(officeRoomService).toBeTruthy();
  });
});
