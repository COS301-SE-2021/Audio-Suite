import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { Observable, of } from 'rxjs';
import { KanbanService } from 'src/app/services/kanban.service';
import { OfficeRoomService } from 'src/app/services/office-room.service';
import { TextChannelsService } from 'src/app/services/text-channels.service';
import { UserService } from 'src/app/services/user.service';
import { LoginComponent } from '../login/login.component';

import { UserComponent } from './user.component';

const config: SocketIoConfig = { url: 'http://localhost:3001/serverSocket' };

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userServiceStub: Partial<UserService>;
  let officeRoomServiceStub: Partial<OfficeRoomService>;
  let textChannelsServiceStub: Partial<TextChannelsService>;
  let kanbanServiceStub: Partial<KanbanService>;

  beforeEach(async () => {
    userServiceStub = {
      getUserDetails(jwt: string): Observable<any>{
        return of({
          Response: "Success"
        })
      } 
    };
    officeRoomServiceStub = {
      getUserOffices(jwt: string): Observable<any>{
        return of({
          Response: "Success",
          Offices: []
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
        return of({
          Response: "Success",
          MessageList: []
        })
      }
    };
    kanbanServiceStub = {};

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
});
