import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { KanbanService } from 'src/app/services/kanban.service';
import { OfficeRoomService } from 'src/app/services/office-room.service';
import { UserService } from 'src/app/services/user.service';

import { ListComponent } from './list.component';

xdescribe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let userServiceStub: Partial<UserService>;
  let officeRoomServiceStub: Partial<OfficeRoomService>;
  let kanbanServiceStub: Partial<KanbanService>;

  beforeEach(async(() => {
    userServiceStub = {
      getUserDetails(
        jwt: string
      ): Observable<any>{
        return of({
          Response: "Success"
        })
      } 
    };

    officeRoomServiceStub = {
      getUserOffices(
        jwt: string
      ): Observable<any>{
        return of({
          Response: "Success",
          Offices: []
        })
      }
    };

    kanbanServiceStub = {
      createCard(
        jwt: string, 
        officeID: number, 
        listName:string, 
        cardID: string, 
        cardMessage: string
      ): Observable<any>{
        return of({
          Response: "Success",

        })
      }
    };

    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      providers: [
        {
          provide: UserService, useValue: userServiceStub
        },
        {
          provide: OfficeRoomService, useValue: officeRoomServiceStub
        },
        {
          provide: KanbanService, useValue: kanbanServiceStub
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
