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

  sendOTPVerificationEmail(
    email: string, 
    userName: string
    ): Observable<any>{
    const body = {
      emailAddress: email,
      userName: userName
    }
    var sendOTPVerificationEmailURL = baseUrl + '/api/notifications/sendVerification';
    return this.http.post<any>(sendOTPVerificationEmailURL, body, httpOptions);
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
    var registerUserURL = baseUrl + '/api/register';
    return this.http.post<any>(registerUserURL, body, httpOptions);
  }

  logUserIn(
    email: string,
    password: string
  ): Observable<any>{
    const body = {
      email: email,
      password: password
    }
    var logUserInURL = baseUrl + '/api/login'
    return this.http.post<any>(logUserInURL, body, httpOptions);
  }

  getUserDetails(
    jwt: string
  ): Observable<any>{
    const body = {
      jwt: jwt
    }
    var getUserDetailsURL = baseUrl + '/api/user/details';
    return this.http.post<any>(getUserDetailsURL, body, httpOptions);
  }
}
