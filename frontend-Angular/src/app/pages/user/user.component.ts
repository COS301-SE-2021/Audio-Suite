import { ThisReceiver } from '@angular/compiler';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfficeRoomService } from 'src/app/services/office-room.service';
import { TextChannelsService } from 'src/app/services/text-channels.service';
import { CardStore } from '../CardStore';
import { ListSchema } from '../ListSchema';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  sidebarOpened: boolean = true;
  showOfficeList: boolean = true;
  showQuickSettingsList: boolean = true;
  showOfficeSettingsList: boolean = true;
  officeSelected: boolean = false;
  sendNewOfficeAlert: boolean = false;
  sendJoinOfficeAlert: boolean = false;

  selectedOffice: string = '';
  selectedOfficeID: string = '';
  newOfficeName: string = '';
  joinOfficeCode: string = '';
  newMessageInput: string = '';
  newOfficeAlertMsg: string = '';
  joinOfficeAlertMsg: string = '';
  cardStore: CardStore;
  lists: ListSchema[];

  newMessageInput: string = "";

  constructor(
    private textChannelsService: TextChannelsService,
    private officeRoomService: OfficeRoomService,
    private router: Router) { }

  setMockData(): void {
    this.cardStore = new CardStore();
    const lists: ListSchema[] = [
      {
        name: 'To Do',
        cards: []
      },
      {
        name: 'Doing',
        cards: []
      },
      {
        name: 'Done',
        cards: []
      }
    ]
    this.lists = lists;
  }

  @HostListener("document:mousemove", ["$event"])
  onMouseMove(e) {
    if(!this.officeSelected)
    {
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
  }

  ngOnInit(): void {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("user-page");

    this.getUserOfficeList();

    this.textChannelsService.listen("joinedRoom").subscribe(data => {
      console.log("Joined room: ", data);
    })

    this.textChannelsService.listen("leftRoom").subscribe(data => {
      console.log("Left room: ", data);
    })

    this.textChannelsService.listen("msgToClient").subscribe(data => {
      console.log("Message to client: ", data);
      this.receivedMessage(data);
    })

    this.setMockData();
    
    //this.textChannelsService.sendMsgToServer("chris", "testing1", "hello world");

  }

  getUserOfficeList(): void{
    var jwt = sessionStorage.getItem("jwt");
    this.officeRoomService.getUserOffices(jwt).subscribe((response) =>{
      console.log(response);
      var officeListHtml = ``;
      var listOfOffices = response.Offices;
      for(let i = 0; i < listOfOffices.length; i++) {
        console.log(listOfOffices[i]);
        officeListHtml += 
        `
          <button 
            class="officeBtn" 
            onclick="selectOffice(${listOfOffices[i].id}, ${listOfOffices[i].name})"
            style="margin-left: 30px; color: black; background-color: transparent; border: none; outline: none;"
            >${listOfOffices[i].name}</button>
          <br>
        `;
      }

      document.getElementById('officeList').innerHTML = officeListHtml;
    },
    (error) => {
      console.log(error);
    })
  }

  toggleSidebar(): void {
    this.sidebarOpened = !this.sidebarOpened;
  }

  selectOffice(officeID, office): void{
    if(this.officeSelected){
      if(this.selectedOffice != office){
        this.leaveOffice();
        this.selectedOffice = office;
        this.selectedOfficeID = officeID;
        this.officeSelected = true;
        this.textChannelsService.joinRoom(office);
      }
    }
    else{
      this.selectedOffice = office;
      this.selectedOfficeID = officeID;
      this.officeSelected = true;
      this.textChannelsService.joinRoom(office);
    }
  }

  leaveOffice(): void{
    this.textChannelsService.leaveRoom(this.selectedOffice);

    this.selectedOffice = '';
    this.selectedOfficeID = '';
    this.officeSelected = false;
  }

  toggleOfficeListView(): void{
    if(this.showOfficeList){
      document.getElementById('officeList').classList.replace("showOffices", "hideOffices");
      document.getElementById('officeListIcon').classList.replace("icon-minimal-down", "icon-minimal-right");
      this.showOfficeList = false;
    }
    else{
      document.getElementById('officeList').classList.replace("hideOffices", "showOffices");
      document.getElementById('officeListIcon').classList.replace("icon-minimal-right", "icon-minimal-down");
      this.showOfficeList = true;
    }
  }

  toggleOfficeSettingsListView(): void{
    if(this.showOfficeSettingsList){
      document.getElementById('officeSettingsList').classList.replace("showOfficeSettings", "hideOfficeSettings");
      document.getElementById('officeSettingsListIcon').classList.replace("icon-minimal-down", "icon-minimal-right");
      this.showOfficeSettingsList = false;
    }
    else{
      document.getElementById('officeSettingsList').classList.replace("hideOfficeSettings", "showOfficeSettings");
      document.getElementById('officeSettingsListIcon').classList.replace("icon-minimal-right", "icon-minimal-down");
      this.showOfficeSettingsList = true;
    }
  }

  toggleQuickSettingsListView(): void{
    if(this.showQuickSettingsList){
      document.getElementById('quickSettingsList').classList.replace("showQuickSettings", "hideQuickSettings");
      document.getElementById('quickSettingsListIcon').classList.replace("icon-minimal-down", "icon-minimal-right");
      this.showQuickSettingsList = false;
    }
    else{
      document.getElementById('quickSettingsList').classList.replace("hideQuickSettings", "showQuickSettings");
      document.getElementById('quickSettingsListIcon').classList.replace("icon-minimal-right", "icon-minimal-down");
      this.showQuickSettingsList = true;
    }
  }

  sendMessage(): void{
    if(this.newMessageInput != "")
    {
      this.textChannelsService.sendMsgToServer("chris", this.selectedOffice, this.newMessageInput);
      this.newMessageInput = "";
    }
  }

  receivedMessage(data: any): void{
    var newMessageObject = 
    `
     <p>${data.message}</p>
    `;
    document.getElementById("messageBoard").innerHTML += newMessageObject;
  }

  createNewOffice(): void{
    var jwt = sessionStorage.getItem('jwt');
    console.log(jwt)
    this.officeRoomService.registerOffice(jwt, this.newOfficeName).subscribe((data) =>{
      console.log(data);
      if(data.Response == "Success"){
        console.log("new Office created")
        this.newOfficeAlertMsg = "New Office created successfully.";
      this.sendNewOfficeAlert = true;
      }
    },
    (error) => {
      console.log(error)
      this.newOfficeAlertMsg = "An office with this name already exists or an error occurred. Please try again.";
      this.sendNewOfficeAlert = true;
    })
    this.newOfficeName = "";
  }

  joinOffice(): void{
    console.log(this.joinOfficeCode)
  }

  logOut(): void{
    sessionStorage.removeItem('jwt');
    this.router.navigate(['login']);
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("user-page");
  }
}
