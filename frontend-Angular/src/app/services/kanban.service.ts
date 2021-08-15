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
export class KanbanService {

  constructor(private http: HttpClient) { }

  createCard(
    jwt: string, 
    officeID: number, 
    listName:string, 
    cardID: string, 
    cardMessage: string
  ): Observable<any>{
      const body = {
          "jwt": jwt,
          "officeID": officeID,
          "listName": listName,
          "cardID": cardID,
          "cardMessage": cardMessage
      }
      var createCardURL = baseUrl + '/api/kanban/createCard';
      console.log(body);
      return this.http.post<any>(createCardURL, body, httpOptions);
  }

  deleteCard(
    jwt: string, 
    officeID: number,
    cardID: string,
  ): Observable<any>{
      const body = {
          jwt: jwt,
          officeID: officeID,
          cardID: cardID,
      }
      var createCardURL = baseUrl + '/api/user';
      return this.http.post<any>(createCardURL, body, httpOptions);
  }

}
