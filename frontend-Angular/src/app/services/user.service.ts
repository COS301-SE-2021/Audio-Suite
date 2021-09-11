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
export class UserService {

  baseUrl = 'http://localhost:3001'

  constructor(private http: HttpClient) { }

  sendOTPVerificationEmail(
    email: string, 
    userName: string
    ): Observable<any>{
    const body = {
      emailAddress: email,
      userName: userName
    }
    var sendOTPVerificationEmailURL = this.baseUrl + '/api/notifications/sendVerification';
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
    var registerUserURL = this.baseUrl + '/api/register';
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
    var logUserInURL = this.baseUrl + '/api/login'
    return this.http.post<any>(logUserInURL, body, httpOptions);
  }

  updateUsername(
    jwt: string,
    id: string,
    newUsername: string
  ): Observable<any>{
    const body = {
      jwt: jwt,
      id: id,
      newUsername: newUsername
    }
    var updateUsernameURL = this.baseUrl + '/api/user/updateUsername'
    return this.http.post<any>(updateUsernameURL, body, httpOptions);
  }

  updateEmail(
    jwt: string,
    id: string,
    newEmail: string
  ): Observable<any>{
    const body = {
      jwt: jwt,
      id: id,
      newEmail: newEmail
    }
    var updateEmailURL = this.baseUrl + '/api/user/updateEmail'
    return this.http.post<any>(updateEmailURL, body, httpOptions);
  }

  updatePassword(
    jwt: string,
    id: string,
    newPassword: string
  ): Observable<any>{
    const body = {
      jwt: jwt,
      id: id,
      newPassword: newPassword
    }
    var updatePasswordURL = this.baseUrl + '/api/user/updatePassword'
    return this.http.post<any>(updatePasswordURL, body, httpOptions);
  }

  deleteUser(
    jwt: string,
    id: string
  ): Observable<any>{
    const body = {
      jwt: jwt,
      id: id
    }
    var deleteUserURL = this.baseUrl + '/api/user/deleteUser'
    return this.http.post<any>(deleteUserURL, body, httpOptions);
  }

  getUserDetails(
    jwt: string
  ): Observable<any>{
    const body = {
      jwt: jwt
    }
    var getUserDetailsURL = this.baseUrl + '/api/user/details';
    return this.http.post<any>(getUserDetailsURL, body, httpOptions);
  }
}
