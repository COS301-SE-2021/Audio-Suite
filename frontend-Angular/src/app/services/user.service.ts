import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
     'Content-Type': 'application/json'
    }),
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.apiUrl;

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
    id: string,
    newUsername: string
  ): Observable<any>{
    const body = {
      id: id,
      newUsername: newUsername
    }
    var updateUsernameURL = this.baseUrl + '/api/user/updateUsername'
    return this.http.post<any>(updateUsernameURL, body, httpOptions);
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
