import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
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
  newEmail: string = '';

  otp: string = "";
  userOTPInput: string = "";
  otpAlert: boolean = false;
  otpMessage: string = "";
  isCollapsed = true;
  focus1;
  focus2;
  focus3;
  focus4;
  focus5;
  focus6;
  showModal = false;

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

  userNav():void{
    this.router.navigate(['user']);
    return
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
      this.userService.updateUsername(jwt, this.userID, String(newUsername)).subscribe((response) => {
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

  updateEmail(): void{
    var jwt = sessionStorage.getItem('jwt');
    // var newUsername = document.getElementById('update-username').value;
    this.newEmail = (<HTMLInputElement>document.getElementById('update-email')).value;
    var inputBox = (<HTMLInputElement>document.getElementById('update-email'));
    var message = (<HTMLInputElement>document.getElementById('email-sub'));

    if(this.newEmail == ""){
      inputBox.placeholder = "Email is required.";
      return
    }
    else{
      const emailControl = new FormControl(this.newEmail, Validators.email);
      if(emailControl.status == "INVALID"){
        message.innerText = "Email given is invalid.";
        inputBox.value="";
        return
      }
    }

    this.userService.getUserDetails(jwt).subscribe((response) => {
      this.userID = response.id;
      this.userFirstName = response.firstName;
      this.userLastName = response.lastName;
      this.userUsername = response.userName;
      this.userEmail = response.email;

      this.userService.sendOTPVerificationEmail(this.userEmail, this.userUsername).subscribe(response => {
        console.log(response)
        this.otp = response.otp;
      })
  
      this.showModal = true;
      var formModal = document.getElementById('formModal').style.display = 'block';
    },
    (error) => {
      console.log(error);
    })
  }

  hideFormModal(): void{
    this.showModal = false;
  }

  validateOTP(): void{
    var jwt = sessionStorage.getItem('jwt');
    if(this.otp == this.userOTPInput)
    {
       this.showModal = false;
       
       this.userService.updateEmail(jwt, this.userID, String(this.newEmail)).subscribe((response) => {
        // this.userID = response.id;
        // this.userFirstName = response.firstName;
        // this.userLastName = response.lastName;
        // this.userUsername = response.userName;
        // this.userEmail = response.email;
      },
      (error) => {
        console.log(error);
      })
    }
    else
    {
      this.otpMessage = "Incorrect otp entered, Please try again.";
      this.otpAlert = true;
    }
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
      this.userService.updatePassword(jwt, this.userID, String(newPassword)).subscribe((response) => {
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

  deleteUser(): void{
    var jwt = sessionStorage.getItem('jwt');

    this.userService.getUserDetails(jwt).subscribe((response) => {
      this.userID = response.id;
      this.userFirstName = response.firstName;
      this.userLastName = response.lastName;
      this.userUsername = response.userName;
      this.userEmail = response.email;
      this.userService.deleteUser(jwt, this.userID,).subscribe((response) => {
        // this.userID = response.id;
        // this.userFirstName = response.firstName;
        // this.userLastName = response.lastName;
        // this.userUsername = response.userName;
        // this.userEmail = response.email;
        if(response.response == "Success"){
          this.router.navigate(['login'])
          return
        }
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
