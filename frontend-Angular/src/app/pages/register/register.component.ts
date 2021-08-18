import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  firstName: string = "";
  lastName: string = "";
  username: string = "";
  email: string = "";
  password: string = "";

  sendAlert: boolean = false;
  alertMsg: string = "";

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
  focus6
  showModal = false;

  constructor(private userService: UserService, private router: Router) { }

  @HostListener("document:mousemove", ["$event"])
  onMouseMove(e) {
    var squares1 = document.getElementById("square1");
    var squares2 = document.getElementById("square2");
    var squares3 = document.getElementById("square3");
    var squares4 = document.getElementById("square4");
    var squares5 = document.getElementById("square5");
    var squares6 = document.getElementById("square6");
    var squares7 = document.getElementById("square7");
    var squares8 = document.getElementById("square8");

    var posX = e.clientX - window.innerWidth / 2;
    var posY = e.clientY - window.innerWidth / 6;

    squares1.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares2.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares3.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares4.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares5.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares6.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares7.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
    squares8.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
  }

  ngOnInit(): void {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");

    //this.onMouseMove(event);
  }

  registerNewUser(): void{
    if(this.firstName == ""){
      this.sendAlert = true;
      this.alertMsg = "First name is required.";
      return
    }
    else{
      this.sendAlert = false;
      this.alertMsg = "";
    }

    if(this.lastName == ""){
      this.sendAlert = true;
      this.alertMsg = "Last name is required.";
      return
    }
    else{
      this.sendAlert = false;
      this.alertMsg = "";
    }

    if(this.username == ""){
      this.sendAlert = true;
      this.alertMsg = "Username is required.";
      return
    }
    else{
      this.sendAlert = false;
      this.alertMsg = "";
    }

    if(this.email == ""){
      this.sendAlert = true;
      this.alertMsg = "Email is required.";
      return
    }
    else{
      const emailControl = new FormControl(this.email, Validators.email);
      if(emailControl.status == "INVALID"){
        this.sendAlert = true;
        this.alertMsg = "Email given is invalid.";
        return
      }
      else{
        this.sendAlert = false;
        this.alertMsg = "";
      }
    }

    if(this.password == ""){
      this.sendAlert = true;
      this.alertMsg = "Password is required.";
      return
    }
    else{
      const passwordControl = new FormControl(this.password, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*()\-_\+\=|\\/?>.<,;:]).{8,}$"));
      if(passwordControl.status == "INVALID"){
        this.sendAlert = true;
        this.alertMsg = "Password given is invalid.\nMin length 8, One Uppercase, One Lowercase, One digit and One special character.";
        return
      }
      else{
        this.sendAlert = false;
        this.alertMsg = "";
      }
    }

    this.userService.sendOTPVerificationEmail(this.email, this.username).subscribe(response => {
      console.log(response)
      this.otp = response.otp;
    })

    this.showModal = true;
  }

  hideFormModal(): void{
    this.showModal = false;
  }

  validateOTP(): void{
    if(this.otp == this.userOTPInput)
    {
       this.showModal = false;
       this.userService.registerUser(this.firstName, this.lastName, this.username, this.email, this.password).subscribe(response => {
          //console.log(response)
          this.router.navigate(['login'])
       })
    }
    else
    {
      this.otpMessage = "Incorrect otp entered, Please try again.";
      this.otpAlert = true;
    }
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");
  }
}
