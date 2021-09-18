import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  email: string = "";
  password: string = "";

  validUser: boolean = false;
  sendAlert: boolean = false;
  alertMsg: string = "";

  isCollapsed = true;
  focus1;
  focus2;

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
    var jwt = sessionStorage.getItem('jwt');
    this.userService.getUserDetails(jwt).subscribe((response) => {
      this.router.navigate(['user']);
    },
    (error) => {
      console.log(error);
    })

    var body = document.getElementsByTagName("body")[0];
    body.classList.add("login-page");

    //this.onMouseMove(event);
  }

  logUserIn(): void{
    if(this.email == ""){
      this.alertMsg = "Email is required.";
      this.sendAlert = true;
      return;
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

    this.userService.logUserIn(this.email, this.password).subscribe((response) => {
      //console.log(response);
      if(response.response == "Success"){
        this.validUser = true;
        sessionStorage.setItem('jwt', response.jwt);
        this.router.navigate(['user'])
        return
      }
    },
    (error) => {
      console.log(error);
      this.password = "";
      this.sendAlert = true;
      this.alertMsg = "Invalid user credentials given.";
      return
    })
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("login-page");
  }
}
