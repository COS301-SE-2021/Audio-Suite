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

  describe('Office Tests: ', () => {
    it('should register a new office', () => {
      const expectedResponse = {
        Response: "Success",
        Office: {
          id: "1", 
          name: "test_office",
          invite: "hsjklgahs6w37e8h3jk6ui23jkh6"
        },
        Rooms: [
          {
            id: 1, 
            officeID: 1, 
            roomName: "Test_Room_1", 
            xCoordinate: 0, 
            yCoordinate: 0, 
            w: 2, 
            h: 2
          },
          {
            id: 2, 
            officeID: 1, 
            roomName: "Test_Room_2", 
            xCoordinate: 3, 
            yCoordinate: 3, 
            w: 2, 
            h: 2
          }
        ]
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

    it('should join a new office', () => {
      const expectedResponse = {
        Response: "Success",
        Message: "User added to office"
      };
      
      const jwt = 'gsahjgkhsdaklfhalskfklas.ghaslkghslslghsal.gfhaslkg/agfhilashglkas';
      const inviteCode = 'jgashgjk8sh439';
      officeRoomService.joinOffice(jwt, inviteCode).subscribe((response) => {
        expect(expectedResponse).toBe(response, "should compare expected response to actual response");
      }, 
      (error) => {
        console.log(error);
      });

      const req = httpTestCtrl.expectOne(officeRoomService.baseUrl + '/api/office/joinInvite');

      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(expectedResponse);
    });

    it('should get all users offices', () => {
      const expectedResponse = {
        Response: "Success",
        Offices: [
          {
            id: 1,
            name: "test_office",
            invite: "hsjklgahs6w37e8h3jk6ui23jkh6"
          }
        ]
      };
      
      const jwt = 'gsahjgkhsdaklfhalskfklas.ghaslkghslslghsal.gfhaslkg/agfhilashglkas';
      officeRoomService.getUserOffices(jwt).subscribe((response) => {
        expect(expectedResponse).toBe(response, "should compare expected response to actual response");
      }, 
      (error) => {
        console.log(error);
      });

      const req = httpTestCtrl.expectOne(officeRoomService.baseUrl + '/api/office/getUserOffices');

      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(expectedResponse);
    });

    it('should get all users offices', () => {
      const expectedResponse = {
        Response: "Success",
        Message: "Invite code sent successfully"
      };
      
      const email = 'test@test.com';
      const name = 'test_user';
      const invite = 'gsajkghjskaddhf89yusajkh'
      officeRoomService.sendOfficeInvite(email, name, invite).subscribe((response) => {
        expect(expectedResponse).toBe(response, "should compare expected response to actual response");
      }, 
      (error) => {
        console.log(error);
      });

      const req = httpTestCtrl.expectOne(officeRoomService.baseUrl + '/api/notifications/sendInviteCode');

      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(expectedResponse);
    });
  });

  describe('Room Testing', () => {
    it('should register a new room', () => {
      const expectedResponse = {
        Response: "Success",
        Room: {
          id: 1, 
          officeID: 1, 
          roomName: "Test_Room",
          roomType: "Normal",
          xCoordinate: 0, 
          yCoordinate: 0, 
          w: 2, 
          h: 2
        },
      };
      
      const jwt = 'gsahjgkhsdaklfhalskfklas.ghaslkghslslghsal.gfhaslkg/agfhilashglkas';
      const officeID = 1;
      const roomName = "Test_Room";
      const roomType = "Normal";
      const xCoordinate = 0;
      const yCoordinate = 0;
      const w = 2;
      const h = 2;
      officeRoomService.registerRoom(jwt, officeID, roomName, roomType, xCoordinate, yCoordinate, w, h).subscribe((response) => {
        expect(expectedResponse).toBe(response, "should compare expected response to actual response");
      }, 
      (error) => {
        console.log(error);
      });

      const req = httpTestCtrl.expectOne(officeRoomService.baseUrl + '/api/room/register');

      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(expectedResponse);
    });

    it('should update an existing room', () => {
      const expectedResponse = {
        Response: "Success",
        UpdatedRoom: {
          id: 1, 
          officeID: 1, 
          roomName: "Test_Room", 
          roomType: "Normal",
          xCoordinate: 0, 
          yCoordinate: 0, 
          w: 3, 
          h: 2
        },
      };
      
      const jwt = 'gsahjgkhsdaklfhalskfklas.ghaslkghslslghsal.gfhaslkg/agfhilashglkas';
      const officeID = 1;
      const roomName = "Test_Room";
      const roomType = "Normal";
      const xCoordinate = 0;
      const yCoordinate = 0;
      const w = 3;
      const h = 2;
      officeRoomService.updateRoom(jwt, officeID, roomName, roomType, xCoordinate, yCoordinate, w, h).subscribe((response) => {
        expect(expectedResponse).toBe(response, "should compare expected response to actual response");
      }, 
      (error) => {
        console.log(error);
      });

      const req = httpTestCtrl.expectOne(officeRoomService.baseUrl + '/api/room/updateDetails');

      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(expectedResponse);
    });

    it('should delete an existing room', () => {
      const expectedResponse = {
        Response: "Success",
        DeletedRoom: {
          id: 1, 
          officeID: 1, 
          roomName: "Test_Room", 
          xCoordinate: 0, 
          yCoordinate: 0, 
          w: 3, 
          h: 2
        },
        Rooms: []
      };
      
      const jwt = 'gsahjgkhsdaklfhalskfklas.ghaslkghslslghsal.gfhaslkg/agfhilashglkas';
      const officeID = 1;
      const roomName = "Test_Room";
      officeRoomService.deleteRoom(jwt, officeID, roomName).subscribe((response) => {
        expect(expectedResponse).toBe(response, "should compare expected response to actual response");
      }, 
      (error) => {
        console.log(error);
      });

      const req = httpTestCtrl.expectOne(officeRoomService.baseUrl + '/api/room/delete');

      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(expectedResponse);
    });

    it('should get all rooms belonging to an office', () => {
      const expectedResponse = {
        Response: "Success",
        Rooms: [
          {
            id: 1, 
            officeID: 1, 
            roomName: "Test_Room_1", 
            xCoordinate: 0, 
            yCoordinate: 0, 
            w: 2, 
            h: 2
          },
          {
            id: 2, 
            officeID: 1, 
            roomName: "Test_Room_2", 
            xCoordinate: 3, 
            yCoordinate: 3, 
            w: 2, 
            h: 2
          }
        ]
      };
      
      const jwt = 'gsahjgkhsdaklfhalskfklas.ghaslkghslslghsal.gfhaslkg/agfhilashglkas';
      const officeID = 1;
      officeRoomService.getOfficeRoomList(jwt, officeID).subscribe((response) => {
        expect(expectedResponse).toBe(response, "should compare expected response to actual response");
      }, 
      (error) => {
        console.log(error);
      });

      const req = httpTestCtrl.expectOne(officeRoomService.baseUrl + '/api/room/getOfficeRooms');

      expect(req.cancelled).toBeFalsy();
      expect(req.request.responseType).toEqual('json');

      req.flush(expectedResponse);
    });
  })
});
