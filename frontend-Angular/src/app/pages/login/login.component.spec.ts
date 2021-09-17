import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { LoginComponent } from './login.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UserService } from 'src/app/services/user.service';
import { Observable, of } from 'rxjs';
import { RegisterComponent } from '../register/register.component';
import { UserComponent } from '../user/user.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userServiceStub: Partial<UserService>;
  let userService: UserService;
  let router: Router;

  beforeEach(async () => {
    userServiceStub = {
      logUserIn(email: string, password: string): Observable<any>{
        return of({
          response: 'Success',
          jwt: "hgdskljhjglksdhglksdh893etylksddh9834ty.gshuis"
        })
      },

      getUserDetails(jwt: string): Observable<any>{
        return of({
          Response: "Success",
          
        })
      }
    };

    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterTestingModule.withRoutes(
        [
          { path: 'home', component: LoginComponent},
          { path: 'register', component: RegisterComponent },
          { path: 'user', component: UserComponent },
        ]
      ),
      ModalModule.forRoot()],
      providers: [{provide: UserService, useValue: userServiceStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialise component variables correctly', () => {
    expect(component.email).toEqual('');
    expect(component.password).toEqual('');
    expect(component.sendAlert).toBeFalse();
    expect(component.alertMsg).toEqual('');
    expect(component.isCollapsed).toBeTrue();
  });

  it('should log user in correctly', () => {
    component.email = 'test@test.com';
    component.password = 'Test01%%';
    fixture.detectChanges();
    component.logUserIn();
    fixture.detectChanges();
    expect(component.sendAlert).toBeFalse();
  });

  it('should send an alert when no email is given', () => {
    component.email = '';
    component.password = 'Test01%%';
    fixture.detectChanges();
    component.logUserIn();
    fixture.detectChanges();
    expect(component.alertMsg).toEqual('Email is required.');
  });

  it('should send an alert when no password is given', () => {
    component.email = 'test@test.com';
    component.password = '';
    fixture.detectChanges();
    component.logUserIn();
    fixture.detectChanges();
    expect(component.alertMsg).toEqual('Password is required.');
  });

  it('should send an alert when an invalid email is given', () => {
    component.email = 'invalid_email';
    component.password = 'Test01%%';
    fixture.detectChanges();
    component.logUserIn();
    fixture.detectChanges();
    expect(component.alertMsg).toEqual('Email given is invalid.');
  });

  it('should send an alert when an invalid password is given', () => {
    component.email = 'test@test.com';
    component.password = 'invalid';
    fixture.detectChanges();
    component.logUserIn();
    fixture.detectChanges();
    var expectedMsg = 'Password given is invalid.\nMin length 8, One Uppercase, One Lowercase, One digit and One special character.';
    expect(component.alertMsg).toEqual(expectedMsg);
  });
});
