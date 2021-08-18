import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

import { UserService } from './user.service';

describe('UserServiceService', () => {
  let httpClient: HttpClient;
  let httpTestCtrl: HttpTestingController;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpTestCtrl = TestBed.get(HttpTestingController);
  });

  beforeEach(inject(
    [UserService], (service: UserService) => {
      userService = service;
    }
  ));

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('should send the OTP via Email', () => {
    const expectedResponse = {
      Response: "Success",
      OTP: "969182"
    };
    
    const email = 'test@test.com';
    const userName = 'test_user_name';
    userService.sendOTPVerificationEmail(email, userName).subscribe((response) => {
      expect(expectedResponse).toBe(response, "should compare expected response to actual response");
    }, 
    (error) => {
      console.log(error);
    });

    const req = httpTestCtrl.expectOne(userService.baseUrl + '/api/notifications/sendVerification');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(expectedResponse);
  });

  it('should register a new user', () => {
    const expectedResponse = {
      Response: "Success",
      OTP: "969182"
    };
    
    const firstName = 'test_user_firstName';
    const lastName = 'test_user_lastName'
    const userName = 'test_user_userName';
    const email = 'test@test.com';
    const password = '_test01';
    userService.registerUser(firstName, lastName, userName, email, password).subscribe((response) => {
      expect(expectedResponse).toBe(response, "should compare expected response to actual response");
    }, 
    (error) => {
      console.log(error);
    });

    const req = httpTestCtrl.expectOne(userService.baseUrl + '/api/register');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(expectedResponse);
  });

  it('should log an existing user in', () => {
    const expectedResponse = {
        Response: "Success",
        jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI5MjMzOTU3LCJleHAiOjE2MjkzMjAzNTd9.m66Kc9LY-gpchMNpsS-4FpSPC0JwN98f2U527StIn8A"
    };
    
    const email = 'test@test.com';
    const password = '_test01';
    userService.logUserIn(email, password).subscribe((response) => {
      expect(expectedResponse).toBe(response, "should compare expected response to actual response");
    }, 
    (error) => {
      console.log(error);
    });

    const req = httpTestCtrl.expectOne(userService.baseUrl + '/api/login');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(expectedResponse);
  });

  it('should get an existing users details', () => {
    const expectedResponse = {
        Response: "Success",
        User: {
          id: '1',
          firstName: 'test_user_firstName',
          lastName: 'test_user_lastName',
          userName: 'test_user_userName',
          email: 'test@test.com',
        }
    };
    
    const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI5MjMzOTU3LCJleHAiOjE2MjkzMjAzNTd9.m66Kc9LY-gpchMNpsS-4FpSPC0JwN98f2U527StIn8A";
    userService.getUserDetails(jwt).subscribe((response) => {
      expect(expectedResponse).toBe(response, "should compare expected response to actual response");
    }, 
    (error) => {
      console.log(error);
    });

    const req = httpTestCtrl.expectOne(userService.baseUrl + '/api/user/details');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(expectedResponse);
  })

  it('should updateUsername of existing user', () => {
    const expectedResponse = {
        Response: "Success"
        //TODO Finish the mock expected response
    };
    
    const id = '1';
    const newUserName = "updatedTest";
    userService.updateUsername(id, newUserName).subscribe((response) => {
      expect(expectedResponse).toBe(response, "should compare expected response to actual response");
    }, 
    (error) => {
      console.log(error);
    });

    const req = httpTestCtrl.expectOne(userService.baseUrl + '/api/user/updateUsername');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(expectedResponse);
  })
});
