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

  it('should register a new office', () => {
    const expectedResponse = {
      Response: "Success",
      Office: {
        id: "1", 
        name: "test_office",
        invite: "hsjklgahs6w37e8h3jk6ui23jkh6"
      }
    };
    
    const jwt = 'gsahjgkhsdaklfhalskfklas.ghaslkghslslghsal.gfhaslkg/agfhilashglkas';
    const officeName = 'test_office';
    officeRoomService.registerOffice(jwt, officeName).subscribe((response) => {
      expect(expectedResponse).toBe(response, "should compare expected response to actual response");
    }, 
    (error) => {
      console.log(error);
    });

    const req = httpTestCtrl.expectOne(officeRoomService.baseUrl + '/api/office/register');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(expectedResponse);
  });
});
