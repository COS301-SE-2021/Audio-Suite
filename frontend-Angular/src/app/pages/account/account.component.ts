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
    console.log(jwt);
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

  updateUsername(): void{
    var jwt = sessionStorage.getItem('jwt');
    // var newUsername = document.getElementById('update-username').value;
    var newUsername = (<HTMLInputElement>document.getElementById('update-username')).value;

    this.userService.getUserDetails(jwt).subscribe((response) => {
      this.userID = response.id;
      this.userFirstName = response.firstName;
      this.userLastName = response.lastName;
      this.userUsername = response.userName;
      this.userEmail = response.email;
      this.userService.updateUsername(this.userID, String(newUsername)).subscribe((response) => {
        // this.userID = response.id;
        // this.userFirstName = response.firstName;
        // this.userLastName = response.lastName;
        // this.userUsername = response.userName;
        // this.userEmail = response.email;
      },
      (error) => {
        console.log(error);
      })
    },
    (error) => {
      console.log(error);
    })
  }

  updatePassword(): void{
    var jwt = sessionStorage.getItem('jwt');
    // var newUsername = document.getElementById('update-username').value;
    var newPassword = (<HTMLInputElement>document.getElementById('update-password')).value;

    this.userService.getUserDetails(jwt).subscribe((response) => {
      this.userID = response.id;
      this.userFirstName = response.firstName;
      this.userLastName = response.lastName;
      this.userUsername = response.userName;
      this.userEmail = response.email;
      this.userService.updatePassword(this.userID, String(newPassword)).subscribe((response) => {
        // this.userID = response.id;
        // this.userFirstName = response.firstName;
        // this.userLastName = response.lastName;
        // this.userUsername = response.userName;
        // this.userEmail = response.email;
      },
      (error) => {
        console.log(error);
      })
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
