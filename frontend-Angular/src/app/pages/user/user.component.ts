import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { OfficeRoomService } from 'src/app/services/office-room.service';
import { TextChannelsService } from 'src/app/services/text-channels.service';
import { UserService } from 'src/app/services/user.service';
import { CardStore } from '../CardStore';
import { ListSchema } from '../ListSchema';

interface Office{
  id: string,
  name: string,
  invite: string
}

interface textMessage{
  sender: string,
  room: string,
  message: string
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('scrollframe', {static: false}) scrollFrame: ElementRef;
  @ViewChildren('messageitem') itemElements: QueryList<any>;
  scrollContainer: any;
  
  sidebarOpened: boolean = true;
  showOfficeList: boolean = true;
  showQuickSettingsList: boolean = true;
  showOfficeSettingsList: boolean = true;
  officeSelected: boolean = false;
  sendNewOfficeAlert: boolean = false;
  sendJoinOfficeAlert: boolean = false;
  sendOfficeInviteAlert: boolean = false;
  officeListLoaded: boolean = false;
  showInviteModal: boolean = false;
  focus6: boolean = false;
  focus7: boolean = false;

  selectedOffice: string = '';
  selectedOfficeID: string = '';
  selectedOfficeInvite: string = '';
  newOfficeName: string = '';
  joinOfficeCode: string = '';
  newMessageInput: string = '';
  newOfficeAlertMsg: string = '';
  joinOfficeAlertMsg: string = '';
  officeInviteAlertMsg: string = '';

  userID: string = '';
  userFirstName: string = '';
  userLastName: string = '';
  userUsername: string = '';
  userEmail: string = '';

  sendInviteToEmail: string = '';
  sendInviteToName: string = '';

  officeList: Office[] = [];

  officeTextChannelMessages: textMessage[] = [];

  cardStore: CardStore;
  lists: ListSchema[];

  constructor(
    private textChannelsService: TextChannelsService,
    private officeRoomService: OfficeRoomService,
    private userService: UserService,
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

    this.getUserDetails();

    this.setMockData();
  }

  ngAfterViewInit(): void {
  }

  getUserOfficeList(): void{
    var jwt = sessionStorage.getItem("jwt");
    this.officeRoomService.getUserOffices(jwt).subscribe((response) =>{
      var listOfOffices = response.Offices;
      for(let i = 0; i < listOfOffices.length; i++) {
        var newOffice = {
          id: listOfOffices[i].id, 
          name: listOfOffices[i].name, 
          invite: listOfOffices[i].invite
        }
        this.officeList.push(newOffice);
      }
      this.officeListLoaded = true;
    },
    (error) => {
      console.log(error);
    })
  }

  getUserDetails(): void{
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

  toggleSidebar(): void {
    this.sidebarOpened = !this.sidebarOpened;
  }

  selectOffice(officeID, office, officeInvite): void{
    if(this.officeSelected){
      if(this.selectedOffice != office){
        this.leaveOffice();
        this.selectedOffice = office;
        this.selectedOfficeID = officeID;
        this.selectedOfficeInvite = officeInvite;
        this.officeSelected = true;
        this.textChannelsService.joinRoom(office);
      }
    }
    else{
      this.selectedOffice = office;
      this.selectedOfficeID = officeID;
      this.selectedOfficeInvite = officeInvite;
      this.officeSelected = true;
      this.textChannelsService.joinRoom(office);
    }
  }

  tabSetOpened(): void {
    this.scrollContainer = this.scrollFrame.nativeElement;  
    this.itemElements.changes.subscribe(_ => this.scrollMessageBoardToBottom());
  }

  leaveOffice(): void{
    this.textChannelsService.leaveRoom(this.selectedOffice);

    this.selectedOffice = '';
    this.selectedOfficeID = '';
    this.selectedOfficeInvite = '';
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

  scrollMessageBoardToBottom(): void{
    var messageBoard = document.getElementById("messageBoard");
    messageBoard.scrollTop = messageBoard.scrollHeight;
  }

  sendMessage(): void{
    if(this.newMessageInput != "")
    {
      this.textChannelsService.sendMsgToServer(this.userUsername, this.selectedOffice, this.newMessageInput);
      this.newMessageInput = "";
    }
  }

  receivedMessage(data: any): void{
    console.log(data);
    var message = {
      sender: data.sender,
      room: data.room,
      message: data.message
    }
    this.officeTextChannelMessages.push(message);
  }

  createNewOffice(): void{
    var jwt = sessionStorage.getItem('jwt');
    console.log(jwt)
    this.officeRoomService.registerOffice(jwt, this.newOfficeName).subscribe((response) =>{
      console.log(response);
      if(response.Response == "Success"){
        console.log("new Office created")
        this.newOfficeAlertMsg = "New Office created successfully.";
        this.sendNewOfficeAlert = true;

        this.officeListLoaded = false;
        this.officeList = [];
        this.getUserOfficeList();
        this.officeListLoaded = true;
      }
    },
    (error) => {
      console.log(error)
      this.newOfficeAlertMsg = "Error - An office with this name already exists or an error occurred. Please try again.";
      this.sendNewOfficeAlert = true;
    })
    this.newOfficeName = "";
  }

  joinOffice(): void{
    var jwt = sessionStorage.getItem('jwt');
    this.officeRoomService.joinOffice(jwt, this.joinOfficeCode).subscribe((response) =>{
      if(response.Response == "Success"){
        console.log("User added to office");
        this.joinOfficeAlertMsg = "Added to office successfully.";
        this.sendJoinOfficeAlert = true;

        this.officeListLoaded = false;
        this.officeList = [];
        this.getUserOfficeList();
        this.officeListLoaded = true;
      }
    },
    (error) => {
      console.log(error)
      this.newOfficeAlertMsg = "Error - You could not be added to the office, the invite may be invalid. Please try again.";
      this.sendNewOfficeAlert = true;
    })
  }

  showSendInviteModal(): void{
    this.showInviteModal = true;
  }

  hideSendInviteModal(): void{
    this.showInviteModal = false;
    this.officeInviteAlertMsg = "";
    this.sendOfficeInviteAlert = false;
  }

  sendOfficeInvite(): void{
    this.officeRoomService.sendOfficeInvite(this.sendInviteToEmail, this.sendInviteToName, this.selectedOfficeInvite).subscribe((response) =>{
      console.log(response)
      if(response.Response == "Success"){
        console.log('invite sent')
        this.officeInviteAlertMsg = "Invite send Successfully.";
        this.sendOfficeInviteAlert = true;
      }
    },
    (error) => {
      console.log(error);
      this.officeInviteAlertMsg = "Error - Office Invite could not be sent. Please try again.";
        this.sendOfficeInviteAlert = true;
    })

    this.sendInviteToEmail = '';
    this.sendInviteToName = '';
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
