import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, merge, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { OfficeRoomService } from 'src/app/services/office-room.service';
import { TextChannelsService } from 'src/app/services/text-channels.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})

export class AccountComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('scrollframe', {static: false}) scrollFrame: ElementRef;
  @ViewChildren('messageitem') itemElements: QueryList<any>;
  scrollContainer: any;

  userID: string = '';
  userFirstName: string = '';
  userLastName: string = '';
  userUsername: string = '';
  userEmail: string = '';

  cols = 12;
  rowHeight = 50;
  compactType: 'vertical' | 'horizontal' | null = null;
  transitions: { name: string; value: string }[] = [
    {
      name: 'ease',
      value: 'transform 500ms ease, width 500ms ease, height 500ms ease'
    },
    {
      name: 'ease-out',
      value:
        'transform 500ms ease-out, width 500ms ease-out, height 500ms ease-out'
    },
    {
      name: 'linear',
      value: 'transform 500ms linear, width 500ms linear, height 500ms linear'
    },
    {
      name: 'overflowing',
      value:
        'transform 500ms cubic-bezier(.28,.49,.79,1.35), width 500ms cubic-bezier(.28,.49,.79,1.35), height 500ms cubic-bezier(.28,.49,.79,1.35)'
    },
    {
      name: 'fast',
      value: 'transform 200ms ease, width 200ms linear, height 200ms linear'
    },
    {
      name: 'slow-motion',
      value:
        'transform 1000ms linear, width 1000ms linear, height 1000ms linear'
    },
    { name: 'transform-only', value: 'transform 500ms ease' }
  ];
  currentTransition: string = this.transitions[0].value;

  dragStartThreshold = 0;
  inFloorPlanEditorMode = false;
  disableDrag = true;
  disableResize = true;
  disableRemove = true;
  autoResize = true;
  preventCollision = false;
  scrollableParent = "floorPlanContent";
  isDragging = false;
  isResizing = false;
  resizeSubscription: Subscription;

  constructor(
    private textChannelsService: TextChannelsService,
    private officeRoomService: OfficeRoomService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
      //This is where we need to edit exclusively for the accounts page!
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("account-page");

    this.getUserDetails();
  }

  ngAfterViewInit(): void {
  }

  getUserDetails(): void {
    var jwt = sessionStorage.getItem('jwt');
    this.userService.getUserDetails(jwt).subscribe((response) => {
      this.userID = response.id;
      this.userFirstName = response.firstName;
      this.userLastName = response.lastName;
      this.userUsername = response.userName;
      this.userEmail = response.email;
    },
    (error) => {
      console.log(error);
    })
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("account-page");
  }

}
