import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { RegisterComponent } from './register.component';
import { UserService } from 'src/app/services/user.service';
import { LoginComponent } from '../login/login.component';
import { ModalModule } from "ngx-bootstrap/modal";
import { Observable, of } from 'rxjs';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let userServiceStub: Partial<UserService>;
  let userService: UserService;
  let router: Router;

  beforeEach(async () => {
    userServiceStub = {
      sendOTPVerificationEmail(email: string, userName: string): Observable<any>{
        return of({
          Response: "Success",
          otp: '6378456'
        })
      },

      registerUser(
        firstName: string
      ): Observable<any>{
        return of({
          Response: "Success",
          NewUser: {
            id: 1,
            firstName: 'Test',
            lastName: 'Test',
            userName: 'Test',
            email: 'test@test.com',
            password: 'Test01%%'
          }
        })
      }
    };

    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [RouterTestingModule.withRoutes(
        [
          { path: 'home', component: LoginComponent },
          { path: 'login', component: LoginComponent }
        ]
      ),
      ModalModule.forRoot()],
      providers: [{provide: UserService, useValue: userServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialise component variables correctly', () => {
    expect(component.firstName).toEqual('');
    expect(component.lastName).toEqual('');
    expect(component.username).toEqual('');
    expect(component.email).toEqual('');
    expect(component.password).toEqual('');
    expect(component.alertMsg).toEqual('');
    expect(component.otp).toEqual('');
    expect(component.userOTPInput).toEqual('');
    expect(component.otpMessage).toEqual('');

    expect(component.sendAlert).toBeFalse();
    expect(component.otpAlert).toBeFalse();
    expect(component.showModal).toBeFalse();
    expect(component.isCollapsed).toBeTrue();
  });

  it('should correctly send an otp and display otp modal', () => {
    component.firstName = 'Test';
    component.lastName = 'Test';
    component.username = 'Test';
    component.email = 'test@test.com';
    component.password = 'Test01%%';
    fixture.detectChanges();
    component.registerNewUser();
    fixture.detectChanges();
    expect(component.sendAlert).toBeFalse();
  });

  it('should correctly check otp and navigate to login', () => {
    component.otp = '6378456';
    component.userOTPInput = '6378456';
    component.firstName = 'Test';
    component.lastName = 'Test';
    component.username = 'Test';
    component.email = 'test@example.com';
    component.password = 'Test01%%';
    fixture.detectChanges();
    component.validateOTP();
    fixture.detectChanges();
    expect(component.otpAlert).toBeFalse();
  });

  it('should send an alert if no firstname is given', () => {
    component.firstName = '';
    fixture.detectChanges();
    component.registerNewUser();
    fixture.detectChanges();
    expect(component.alertMsg).toEqual('First name is required.');
  });

  it('should send an alert if no lastname is given', () => {
    component.firstName = 'Test';
    component.lastName = '';
    fixture.detectChanges();
    component.registerNewUser();
    fixture.detectChanges();
    expect(component.alertMsg).toEqual('Last name is required.');
  });

  it('should send an alert if no userName is given', () => {
    component.firstName = 'Test';
    component.lastName = 'Test';
    component.username = '';
    fixture.detectChanges();
    component.registerNewUser();
    fixture.detectChanges();
    expect(component.alertMsg).toEqual('Username is required.');
  });

  it('should send an alert if no email is given', () => {
    component.firstName = 'Test';
    component.lastName = 'Test';
    component.username = 'Test';
    component.email = '';
    fixture.detectChanges();
    component.registerNewUser();
    fixture.detectChanges();
    expect(component.alertMsg).toEqual('Email is required.');
  });

  it('should send an alert if no password is given', () => {
    component.firstName = 'Test';
    component.lastName = 'Test';
    component.username = 'Test';
    component.email = 'test@test.com';
    component.password = '';
    fixture.detectChanges();
    component.registerNewUser();
    fixture.detectChanges();
    expect(component.alertMsg).toEqual('Password is required.');
  });

  it('should send an alert if an invalid email is given', () => {
    component.firstName = 'Test';
    component.lastName = 'Test';
    component.username = 'Test';
    component.email = 'invalid_Email';
    fixture.detectChanges();
    component.registerNewUser();
    fixture.detectChanges();
    expect(component.alertMsg).toEqual('Email given is invalid.');
  });

  it('should send an alert if an invalid password is given', () => {
    component.firstName = 'Test';
    component.lastName = 'Test';
    component.username = 'Test';
    component.email = 'test@test.com';
    component.password = 'invalid';
    fixture.detectChanges();
    component.registerNewUser();
    fixture.detectChanges();
    var expectedMsg = 'Password given is invalid.\nMin length 8, One Uppercase, One Lowercase, One digit and One special character.';
    expect(component.alertMsg).toEqual(expectedMsg);
  });
});
