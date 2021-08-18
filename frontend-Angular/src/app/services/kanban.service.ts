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
export class KanbanService {

  baseUrl = 'https://api.audiosuite.xyz'

  constructor(private http: HttpClient) { }

  createCard(
    jwt: string, 
    officeID: number, 
    listName:string, 
    cardID: string, 
    cardMessage: string
  ): Observable<any>{
      const body = {
          jwt: jwt,
          officeID: officeID,
          listName: listName,
          cardID: cardID,
          cardMessage: cardMessage
      }
      var createCardURL = this.baseUrl + '/api/kanban/createCard';
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
      var deleteCardURL = this.baseUrl + '/api/kanban/deleteCard';
      return this.http.post<any>(deleteCardURL, body, httpOptions);
  }

  getAllCards(
    jwt: string, 
    officeID: number
  ): Observable<any>{
      const body = {
          jwt: jwt,
          officeID: officeID
      }
      var deleteCardURL = this.baseUrl + '/api/kanban/getAllCards';
      return this.http.post<any>(deleteCardURL, body, httpOptions);
  }

  editCard(
    jwt: string, 
    officeID: number, 
    cardID:string, 
    oldListName:string, 
    newListName: string
  ): Observable<any> {
    const body = {
      jwt: jwt,
      officeID: officeID,
      cardID: cardID,
      oldListName: oldListName,
      newListName: newListName
    }
    var editCardURL = this.baseUrl + '/api/kanban/editCard';
    return this.http.post<any>(editCardURL, body, httpOptions);
  }

  getListName(
    jwt: string, 
    officeID: number, 
    cardID:string
  ): Observable<any> {
    const body = {
      jwt: jwt,
      officeID: officeID,
      cardID: cardID
    }
    var getListNameURL = this.baseUrl + '/api/kanban/getListName';
    return this.http.post<any>(getListNameURL, body, httpOptions);
  }

}
