import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
     'Content-Type': 'application/json'
    }),
}

@Injectable({
  providedIn: 'root'
})
export class TimeTrackingService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  //-----------------------------------------------------------------------------------------------------------
  //                                           Time Tracker User
  //-----------------------------------------------------------------------------------------------------------

  //Observable function to add a new tracking instance to the repository
  registerNewTimeTrackingInstance(
    jwt: string, 
    officeID: number, 
    description: string, 
    projectID: number, 
    tagID: number, 
    startTime: Date, 
    endTime: Date
  ): Observable<any>{
    const body = {
      jwt: jwt,
      officeID: officeID, 
      description: description,
      projectID: projectID,
      tagID: tagID,
      startTime: startTime,
      endTime: endTime
    };
    let registerNewTrackingInstanceURL = this.baseUrl + '/api/time-tracker/user/registerTrackingInstance';
    return this.http.post<any>(registerNewTrackingInstanceURL, body, httpOptions);
  }

  //Observable function to fetch all tracking instance from the repository for a specific user and office combo
  getAllUserOfficeTimeTrackingInstances(
    jwt: string, 
    officeID: number
  ): Observable<any>{
    const body = {
      jwt: jwt,
      officeID: officeID
    };
    let getAllUserOfficeTrackingInstancesURL = this.baseUrl + '/api/time-tracker/user/getTrackingInstances';
    return this.http.post<any>(getAllUserOfficeTrackingInstancesURL, body, httpOptions);
  }

  //-----------------------------------------------------------------------------------------------------------
  //                                           Time Tracker Project
  //-----------------------------------------------------------------------------------------------------------

  //Observable function to add a new office project to the repository 
  registerNewTimeTrackingProject(
    jwt: string, 
    officeID: number,
    projectName: string
  ): Observable<any>{
    const body = {
      jwt: jwt,
      officeID: officeID,
      projectName: projectName
    };
    let registerNewTrackingProjectURL = this.baseUrl + '/api/time-tracker/project/register';
    return this.http.post<any>(registerNewTrackingProjectURL, body, httpOptions)
  }

  //Observable function to remove an office project from the repository 
  removeTimeTrackingProjectByID(
    jwt: string, 
    id: number,
  ): Observable<any>{
    const body = {
      jwt: jwt,
      id: id
    };
    let removeTrackingProjectURL = this.baseUrl + '/api/time-tracker/project/removeByID';
    return this.http.post<any>(removeTrackingProjectURL, body, httpOptions)
  }

  //Observable function to remove an office project from the repository 
  removeTimeTrackingProjectByName(
    jwt: string, 
    officeID: number,
    projectName: string
  ): Observable<any>{
    const body = {
      jwt: jwt,
      officeID: officeID,
      projectName: projectName
    };
    let removeTrackingProjectURL = this.baseUrl + '/api/time-tracker/project/removeByName';
    return this.http.post<any>(removeTrackingProjectURL, body, httpOptions)
  }

  //Observable function to fetch all office projects from the repository 
  getAllTimeTrackingProjects(
    jwt: string, 
    officeID: number
  ): Observable<any>{
    const body = {
      jwt: jwt,
      officeID: officeID
    };
    let getAllTimeTrackingProjectsURL = this.baseUrl + '/api/time-tracker/project/getOfficeProjects';
    return this.http.post<any>(getAllTimeTrackingProjectsURL, body, httpOptions)
  }

  //-----------------------------------------------------------------------------------------------------------
  //                                           Time Tracker Tag
  //-----------------------------------------------------------------------------------------------------------

  //Observable function to add a new office tag to the repository 
  registerNewTimeTrackingTag(
    jwt: string, 
    officeID: number,
    tagName: string
  ): Observable<any>{
    const body = {
      jwt: jwt,
      officeID: officeID,
      tagName: tagName
    };
    let registerNewTimeTrackingTagURL = this.baseUrl + '/api/time-tracker/tag/register';
    return this.http.post<any>(registerNewTimeTrackingTagURL, body, httpOptions)
  }

  //Observable function to remove an office tag from the repository 
  removeTimeTrackingTag(
    jwt: string, 
    officeID: number,
    tagName: string
  ): Observable<any>{
    const body = {
      jwt: jwt,
      officeID: officeID,
      tagName: tagName
    };
    let removeTrackingTagURL = this.baseUrl + '/api/time-tracker/tag/remove';
    return this.http.post<any>(removeTrackingTagURL, body, httpOptions)
  }

  //Observable function to fetch all office tags from the repository 
  getAllTimeTrackingTags(
    jwt: string, 
    officeID: number
  ): Observable<any>{
    const body = {
      jwt: jwt,
      officeID: officeID
    };
    let getAllTimeTrackingTagsURL = this.baseUrl + '/api/time-tracker/tag/getOfficeTags';
    return this.http.post<any>(getAllTimeTrackingTagsURL, body, httpOptions)
  }
}
