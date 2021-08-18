import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({
     'Content-Type': 'application/json'
    }),
}

@Injectable({
  providedIn: 'root'
})
export class OfficeRoomService {

  baseUrl = 'http://localhost:3001'

  constructor(private http: HttpClient) { }

  //-------------------------------------------------------------------------------------------------------------
  //                                             Office Functions
  //-------------------------------------------------------------------------------------------------------------


  registerOffice(
    jwt: string,
    officeName: string
  ): Observable<any>{
    const body = {
      name: officeName,
      jwt: jwt
    }
    var registerOfficeURL = this.baseUrl + '/api/office/register';
    return this.http.post<any>(registerOfficeURL, body, httpOptions)
  }

  joinOffice(
    jwt: string,
    invite: string
  ): Observable<any>{
    const body = {
      jwt: jwt,
      invite: invite
    }
    var joinOfficeURL = this.baseUrl + '/api/office/joinInvite';
    return this.http.post<any>(joinOfficeURL, body, httpOptions);
  }

  getUserOffices(
    jwt: string
  ): Observable<any>{
    const body = {
      jwt: jwt
    }
    var getUserOfficesURL = this.baseUrl + '/api/office/getUserOffices';
    return this.http.post<any>(getUserOfficesURL, body, httpOptions);
  }

  sendOfficeInvite(
    email: string,
    name: string, 
    invite: string
  ): Observable<any>{
    const body = {
      emailAddress: email,
      name: name,
      inviteCode: invite
    }
    var sendInviteCodeURL = this.baseUrl + '/api/notifications/sendInviteCode';
    return this.http.post<any>(sendInviteCodeURL, body, httpOptions);
  }

  //-------------------------------------------------------------------------------------------------------------
  //                                             Room Functions
  //-------------------------------------------------------------------------------------------------------------

  registerRoom(
    jwt: string,
    officeID: number,
    roomName: string,
    xCoordinate: number,
    yCoordinate: number,
    width: number, 
    height: number
  ): Observable<any>{
    const body = {
      jwt: jwt,
      officeID: officeID,
      roomName: roomName,
      xCoordinate: xCoordinate,
      yCoordinate: yCoordinate,
      width: width,
      height: height
    }
    var registerRoomURL = this.baseUrl + '/api/room/register';
    return this.http.post<any>(registerRoomURL, body, httpOptions);
  }

  getOfficeRoomList(jwt: string, officeID: number): Observable<any>{
    const body = {
      jwt: jwt,
      officeID: officeID
    }
    var getRoomListURL = this.baseUrl + '/api/room/getOfficeRooms';
    return this.http.post<any>(getRoomListURL, body, httpOptions);
  }

  updateRoom(
    jwt: string,
    officeID: number,
    roomName: string,
    xCoordinate: number,
    yCoordinate: number,
    width: number, 
    height: number
  ): Observable<any>{
    const body = {
      jwt: jwt,
      officeID: officeID,
      roomName: roomName,
      xCoordinate: xCoordinate,
      yCoordinate: yCoordinate,
      width: width,
      height: height
    }
    var registerRoomURL = this.baseUrl + '/api/room/updateDetails';
    return this.http.post<any>(registerRoomURL, body, httpOptions);
  }

  deleteRoom(
    jwt: string,
    officeID: number,
    roomName: string
    ): Observable<any>{
      const body = {
        jwt: jwt,
        officeID: officeID,
        roomName: roomName
      }
      var deleteRoomURL = this.baseUrl + '/api/room/delete';
      return this.http.post<any>(deleteRoomURL, body, httpOptions);
  }

  getUserRoomByID(
    jwt: string,
    userID: number
    ): Observable<any>{
      const body = {
        jwt: jwt,
        userID: userID
      }
      var userRoom = this.baseUrl + '/api/room/findUser';
      return this.http.post<any>(userRoom, body, httpOptions);
  }
}
