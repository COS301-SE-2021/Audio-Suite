import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { Observable, of } from 'rxjs';
import { KanbanService } from 'src/app/services/kanban.service';
import { OfficeRoomService } from 'src/app/services/office-room.service';
import { TextChannelsService } from 'src/app/services/text-channels.service';
import { TimeTrackingService } from 'src/app/services/time-tracking.service';
import { UserService } from 'src/app/services/user.service';
import { LoginComponent } from '../login/login.component';

import { UserComponent } from './user.component';

const config: SocketIoConfig = { url: 'http://localhost:3001/serverSocket' };

interface Office{
  id: string,
  name: string,
  invite: string,
  role: string
}

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userServiceStub: Partial<UserService>;
  let officeRoomServiceStub: Partial<OfficeRoomService>;
  let textChannelsServiceStub: Partial<TextChannelsService>;
  let timeTrackingServiceStub: Partial<TimeTrackingService>;
  let kanbanServiceStub: Partial<KanbanService>;

  beforeEach(async () => {
    userServiceStub = {
      getUserDetails(jwt: string): Observable<any>{
        return of({
          Response: "Success",
          id: '1',
          firstName: 'Test',
          lastName: 'Test',
          userName: 'Test',
          email: 'test@test.com'
        })
      } 
    };
    officeRoomServiceStub = {
      getUserOffices(jwt: string): Observable<any>{
        return of({
          Response: "Success",
          Offices: [
            {
              id: '1',
              name: 'Test_Office',
              invite: 'ghsaghs343hkj34h',
              role: 'Manager'
            }
          ]
        })
      },

      getRoomUsersByOfficeID(jwt: string, officeID: number): Observable<any>{
        return of({
          Response: "Success",
          RoomUserList: []
        })
      }
    };
    textChannelsServiceStub = {
      joinRoom(jwt: string, officeID: number, office: string, channel: string, isRoom: boolean){

      },

      leaveRoom(jwt: string, officeID: number, office: string, channel: string){
        
      },

      sendMsgToServer(jwt: string, officeID: number, sender: string, channel: string, message: string){
        
      },

      listen(eventName: string){
        if(eventName == 'joinedRoomText'){
          return of({
            Response: "Success",
            MessageList: []
          })
        }
        else if(eventName == 'leftRoomText'){
          return of({
            Response: "Success",
            Room: "Test"
          })
        }
        else if(eventName == 'msgToClient'){
          return of({
            Response: "Success",
          })
        }
        else if(eventName == 'updateRoomAttendance'){
          return of({
            Response: "Success",
          })
        }
      }
    };
    kanbanServiceStub = {};

    timeTrackingServiceStub = {}; 

    await TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports: [RouterTestingModule.withRoutes(
        [{ path: 'home', component: LoginComponent}]
      ),
      ModalModule.forRoot(),
      SocketIoModule.forRoot(config)
      ],
      providers: [
        {
          provide: UserService, useValue: userServiceStub
        },
        {
          provide: OfficeRoomService, useValue: officeRoomServiceStub
        },
        { 
          provide: TextChannelsService, useValue: textChannelsServiceStub
        },
        {
           provide: KanbanService, useValue: kanbanServiceStub
        },
        {
          provide: TimeTrackingService, useValue: timeTrackingServiceStub
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialise component variables correctly', () => {
    expect(component.sidebarOpened).toBeTrue();
    expect(component.showOfficeList).toBeTrue();
    expect(component.showQuickSettingsList).toBeTrue();
    expect(component.showOfficeSettingsList).toBeTrue();
    expect(component.officeSelected).toBeFalse();
    expect(component.roomSelected).toBeFalse();
    expect(component.sendNewOfficeAlert).toBeFalse();
    expect(component.sendJoinOfficeAlert).toBeFalse();
    expect(component.displayFormModal).toBeFalse();
    expect(component.showInviteModal).toBeFalse();
    expect(component.showAddRoomModal).toBeFalse();
    expect(component.focus6).toBeFalse();
    expect(component.focus7).toBeFalse();
  });

  it('should get a list of offices and put them in the office list for a user', () => {
    window.sessionStorage.setItem('jwt', 'hdsgakjghskahgioshgshbgiushgsjkbgis');
    fixture.detectChanges();
    component.getUserOfficeList();
    fixture.detectChanges();
    expect(component.officeListLoaded).toBeTrue();
    var officeList: Office[] = [
      {
        id: '1',
        name: 'Test_Office',
        invite: 'ghsaghs343hkj34h',
        role: 'Manager'
      },
      {
        id: '1',
        name: 'Test_Office',
        invite: 'ghsaghs343hkj34h',
        role: 'Manager'
      }
    ];
    console.log(component.officeList);
    expect(component.officeList).toEqual(officeList);
  });

  it('should get the users details', () => {
    window.sessionStorage.setItem('jwt', 'hdsgakjghskahgioshgshbgiushgsjkbgis');
    fixture.detectChanges();
    component.getUserDetails();
    fixture.detectChanges();
    expect(component.userID).toEqual('1');
    expect(component.userFirstName).toEqual('Test');
    expect(component.userLastName).toEqual('Test');
    expect(component.userUsername).toEqual('Test');
    expect(component.userEmail).toEqual('test@test.com');
  })
});
