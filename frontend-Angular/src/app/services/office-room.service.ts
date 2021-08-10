import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({
     'Content-Type': 'application/json'
    }),
}

const baseUrl = 'http://localhost:3001'

@Injectable({
  providedIn: 'root'
})
export class OfficeRoomService {

  constructor(private http: HttpClient) { }

  registerOffice(
    jwt: string,
    officeName: string
  ): Observable<any>{
    const body = {
      name: officeName,
      jwt: jwt
    }
    var registerOfficeURL = baseUrl + '/api/office/register';
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
    var joinOfficeURL = baseUrl + '/api/office/joinInvite';
    return this.http.post<any>(joinOfficeURL, body, httpOptions);
  }

  getUserOffices(
    jwt: string
  ): Observable<any>{
    const body = {
      jwt: jwt
    }
    var getUserOfficesURL = baseUrl + '/api/office/getUserOffices';
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
    var sendInviteCodeURL = baseUrl + '/api/notifications/sendInviteCode';
    return this.http.post<any>(sendInviteCodeURL, body, httpOptions);
  }
}
