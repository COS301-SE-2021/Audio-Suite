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
    return this.http.post('http://localhost:3001/api/register', body, httpOptions);
  }

  logUserIn(
    email: string,
    password: string
  ): Observable<any>{
    const body = {
      email: email,
      password: password
    }
    return this.http.post<any>('http://localhost:3001/api/login', body, httpOptions);
  }

  getUserDetails(
    user_jwt: string
    ): Observable<any>{
    const body = {
      jwt: user_jwt
    }
    return this.http.post<any>('http://localhost:3001/api/user/details', body, httpOptions);
  }

  getUsernameById(
    userID: number
    ): Observable<any>{
    const body = {
      id: userID
    }
    return this.http.post<any>('http://localhost:3001/api/user/getUsernameById', body, httpOptions);
  }

}
