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
export class UserService {

  constructor(private http: HttpClient) { }

  sendOTPVerificationEmail(email: string, userName: string): Observable<any>{
    const body = {
      emailAddress: email,
      userName: userName
    }
    return this.http.post<any>('http://localhost:3001/api/notifications/sendVerification', body, httpOptions);
  }

  registerUser(
    firstName: string,
    lastName: string, 
    userName: string,
    emailAddress: string, 
    password: string
  ):Observable<any>{
    const body = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: emailAddress,
      password: password
    }
    return this.http.post('http://localhost:3001/api/register', body, httpOptions)
  }
}
