import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { KtdDragEnd, KtdDragStart, KtdGridComponent, KtdGridLayout, KtdGridLayoutItem, KtdResizeEnd, KtdResizeStart, ktdTrackById} from '@katoid/angular-grid-layout';
import { fromEvent, merge, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { OfficeRoomService } from 'src/app/services/office-room.service';
import { TextChannelsService } from 'src/app/services/text-channels.service';
import { UserService } from 'src/app/services/user.service';
import { CardStore } from '../cardstore';
import { ListSchema } from '../listschema';
import { AudioComponent } from 'src/app/audio/audio.component';
import { AngularAgoraRtcService, Stream, AgoraConfig } from 'angular-agora-rtc';

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

  parentMessage = "message from parent"

  @ViewChild('scrollframe', {static: false}) scrollFrame: ElementRef;
  @ViewChildren('messageitem') itemElements: QueryList<any>;
  @ViewChild(KtdGridComponent, { static: true }) grid: KtdGridComponent;
  scrollContainer: any;

  agoraConfig: AgoraConfig = {
    AppID: '023766436b244044ab85f65470dcbae2',
  };
  
  agoraService:AngularAgoraRtcService = new AngularAgoraRtcService(this.agoraConfig);
  audioComponent: AudioComponent;
  
  sidebarOpened: boolean = true;
  showOfficeList: boolean = true;
  showQuickSettingsList: boolean = true;
  showOfficeSettingsList: boolean = true;
  officeSelected: boolean = false;
  roomSelected: boolean = false;
  sendNewOfficeAlert: boolean = false;
  sendJoinOfficeAlert: boolean = false;
  sendFormModalAlert: boolean = false;
  officeListLoaded: boolean = false;
  displayFormModal: boolean = false;
  showInviteModal: boolean = false;
  showAddRoomModal: boolean = false;
  focus6: boolean = false;
  focus7: boolean = false;

  selectedOffice: string = '';
  selectedOfficeID: number = null;
  selectedOfficeInvite: string = '';
  selectedRoom: string = '';
  selectedRoomID: string = '';
  newOfficeName: string = '';
  joinOfficeCode: string = '';
  newMessageInput: string = '';
  newOfficeAlertMsg: string = '';
  joinOfficeAlertMsg: string = '';
  formModalAlertMsg: string = '';

  userID: string = '';
  userFirstName: string = '';
  userLastName: string = '';
  userUsername: string = '';
  userEmail: string = '';

  sendInviteToEmail: string = '';
  sendInviteToName: string = '';
  newRoomName: string = '';

  officeList: Office[] = [];

  officeTextChannelMessages: textMessage[] = [];
  roomTextChannelMessages: textMessage[] = [];

  cardStore: CardStore;
  lists: ListSchema[];

  cols = 12;
  rowHeight = 50;
  compactType: 'vertical' | 'horizontal' | null = null;
  layout: KtdGridLayout = [];
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
    this.audioComponent = new AudioComponent( this.agoraService, this.officeRoomService );

    this.getUserDetails();
    this.getUserOfficeList();

    this.textChannelsService.listen("joinedRoomText").subscribe(data => {
      console.log("Joined room: ", data);
      if(data.Room == this.selectedOffice + '-Text'){
        this.officeTextChannelMessages = [];
        data.MessageList.forEach(message => {
          var newMessage = {
            sender: message.sender,
            room: message.room,
            message: message.message
          }
          this.officeTextChannelMessages.push(newMessage);
        })
      }
      else{
        this.roomTextChannelMessages = [];
        data.MessageList.forEach(message => {
          var newMessage = {
            sender: message.sender,
            room: message.room,
            message: message.message
          }
          this.roomTextChannelMessages.push(newMessage);
        })
      }
    })

    this.textChannelsService.listen("leftRoomText").subscribe(data => {
      console.log("Left room: ", data);
    })

    this.textChannelsService.listen("msgToClient").subscribe(data => {
      this.receivedMessage(data);
    }) 

    this.setMockData();

    this.resizeSubscription = merge(
      fromEvent(window, 'resize'),
      fromEvent(window, 'orientationchange')
    )
      .pipe(
        debounceTime(50),
        filter(() => this.autoResize)
      )
      .subscribe(() => {
        this.grid.resize();
      });

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
        this.layout = [];

        var jwt = sessionStorage.getItem('jwt');
        this.officeRoomService.getOfficeRoomList(jwt, officeID).subscribe((response) => {
          console.log(response);
          if(response.Response == "Success"){
            var newLayout: KtdGridLayout = [];
            for(let room of response.Rooms){
              var newRoom: KtdGridLayoutItem = { 
                id: room.roomName, 
                x: room.xCoordinate, 
                y: room.yCoordinate, 
                w: room.width, 
                h: room.height 
              };
              newLayout.push(newRoom);
            }
            this.layout = newLayout;
          }
        },
        (error) => {
          console.log(error);
        });

        this.audioComponent.join(this.userID, officeID);
        this.selectedOffice = office;
        this.selectedOfficeID = officeID;
        this.selectedOfficeInvite = officeInvite;
        this.officeSelected = true;
        var jwt = sessionStorage.getItem('jwt');
        this.textChannelsService.joinRoom(jwt, office + "-Text");
      }
    }
    else{
      var jwt = sessionStorage.getItem('jwt');
      this.officeRoomService.getOfficeRoomList(jwt, officeID).subscribe((response) => {
        console.log(response);
        if(response.Response == "Success"){
          var newLayout: KtdGridLayout = [];
          for(let room of response.Rooms){
            var newRoom: KtdGridLayoutItem = { 
              id: room.roomName, 
              x: room.xCoordinate, 
              y: room.yCoordinate, 
              w: room.width, 
              h: room.height 
            };
            newLayout.push(newRoom);
          }
          this.layout = newLayout;
        }
      },
      (error) => {
        console.log(error);
      });

      this.audioComponent.join(this.userID, officeID);
      this.selectedOffice = office;
      this.selectedOfficeID = officeID;
      this.selectedOfficeInvite = officeInvite;
      this.officeSelected = true;
      var jwt = sessionStorage.getItem('jwt');
      this.textChannelsService.joinRoom(jwt, office + "-Text");
    }
  }

  tabSetOpened(): void {
    this.scrollContainer = this.scrollFrame.nativeElement;  
    this.itemElements.changes.subscribe(_ => this.scrollMessageBoardToBottom());
  }

  leaveOffice(): void{
    this.textChannelsService.leaveRoom(this.selectedOffice + "-Text");
    this.selectedOffice = '';
    this.selectedOfficeID = null;
    this.selectedOfficeInvite = '';
    this.officeSelected = false;
    this.officeTextChannelMessages = [];
    this.audioComponent.leave();
  }

  selectRoom(id: string, leaveRoom: boolean): void{
  
    if(leaveRoom){
      this.textChannelsService.leaveRoom(id + "-Text");
      this.roomSelected = false;
      this.selectedRoom = '';
      this.roomTextChannelMessages = [];
      this.audioComponent.leave();
    }
    else{

      if(this.roomSelected){
        if(this.selectedRoom != id){
          this.leaveRoom();
          this.audioComponent.leave();
          this.roomSelected = true;
          this.selectedRoom = id;
          var jwt = sessionStorage.getItem('jwt');
          this.textChannelsService.joinRoom(jwt, id + "-Text");
          this.audioComponent.publish(this.selectedRoom);
        }
      }
      else{
        this.roomSelected = true;
        this.selectedRoom = id;
        var jwt = sessionStorage.getItem('jwt');
        this.textChannelsService.joinRoom(jwt, id + "-Text");
        this.audioComponent.publish(this.selectedRoom);
      }
    }
  }

  leaveRoom(): void{
    this.textChannelsService.leaveRoom(this.selectedRoom + "-Text");
    this.roomSelected = false;
    this.selectedRoom = '';
    this.roomTextChannelMessages = [];
  }

  addRoom(): void{
    console.log("add room: " + this.newRoomName)
    var newRoom: KtdGridLayoutItem = {
      id: this.newRoomName,
      x: 0,
      y: 0,
      w: 1,
      h: 1
    };

    var newLayout: KtdGridLayout = [];
    this.layout.forEach(room => {
      var oldRoom: KtdGridLayoutItem = {
        id: room.id,
        x: room.x,
        y: room.y,
        w: room.w,
        h: room.h
      };
      newLayout.push(oldRoom);
    })
    newLayout.push(newRoom);

    var jwt = sessionStorage.getItem('jwt');
    this.officeRoomService.registerRoom(
      jwt, 
      this.selectedOfficeID, 
      this.newRoomName, 
      0, 
      0, 
      1, 
      1).subscribe((response) => {
        console.log(response);
        if(response.Response == "Success"){
          this.layout = newLayout;
          this.hideDisplayFormModal();
        }
    },
    (error) => {
      console.log(error.error);
      this.sendFormModalAlert = true;
      this.formModalAlertMsg = error.error.message;
      this.newRoomName = '';
    })
  }

  removeRoom(id: string): void{
    console.log("remove room: ", id)
    var jwt = sessionStorage.getItem('jwt');
    this.officeRoomService.deleteRoom(jwt, this.selectedOfficeID, id).subscribe((response) => {
      console.log(response)
      if(response.Response == "Success"){
        var newLayout: KtdGridLayout = [];
        response.Rooms.forEach(room => {
          var newRoom: KtdGridLayoutItem = { 
            id: room.roomName, 
            x: room.xCoordinate, 
            y: room.yCoordinate, 
            w: room.width, 
            h: room.height };
          newLayout.push(newRoom);
        })
        this.layout = newLayout;
      }
    },
    (error) => {
      console.log("error")
    })
  }

  onLayoutUpdated(layout: KtdGridLayout): void{
    console.log("Layout updated", layout)
    this.layout = layout;
    var jwt = sessionStorage.getItem('jwt');
    this.layout.forEach(room => {
      this.officeRoomService.updateRoom(
        jwt, 
        this.selectedOfficeID, 
        room.id, 
        room.x, 
        room.y, 
        room.w, 
        room.h
        ).subscribe((response) => {
          console.log(response);
      },
      (error) => {
        console.log(error)
      })
    })
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

  sendMessage(room: string): void{
    console.log("send message room: " + room);
    if(this.newMessageInput != "")
    {
      var jwt = sessionStorage.getItem('jwt');
      this.textChannelsService.sendMsgToServer(jwt, this.selectedOfficeID, this.userUsername, room + "-Text", this.newMessageInput);
      this.newMessageInput = "";
    }
  }

  receivedMessage(data: any): void{
    var message = {
      sender: data.sender,
      room: data.room,
      message: data.message
    }
    if(data.room == this.selectedOffice + "-Text"){
      this.officeTextChannelMessages.push(message);
    }
    else{
      this.roomTextChannelMessages.push(message);
    }
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
    this.displayFormModal = true;
    this.showInviteModal = true;
  }

  showAddModal(): void{
    this.displayFormModal = true;
    this.showAddRoomModal = true;
  }

  hideDisplayFormModal(): void{
    this.showInviteModal = false;
    this.showAddRoomModal = false;
    this.displayFormModal = false;
    this.formModalAlertMsg = '';
    this.sendFormModalAlert = false;
    this.newRoomName = '';
    this.sendInviteToName = '';
    this.sendInviteToEmail = '';
  }

  sendOfficeInvite(): void{
    this.officeRoomService.sendOfficeInvite(this.sendInviteToEmail, this.sendInviteToName, this.selectedOfficeInvite).subscribe((response) =>{
      console.log(response)
      if(response.Response == "Success"){
        console.log('invite sent')
        this.formModalAlertMsg = "Invite send Successfully.";
        this.sendFormModalAlert = true;
      }
    },
    (error) => {
      console.log(error);
      this.formModalAlertMsg = "Error - Office Invite could not be sent. Please try again.";
        this.sendFormModalAlert = true;
    })

    this.sendInviteToEmail = '';
    this.sendInviteToName = '';
  }

  EditFloorPlan(): void{
    console.log("Entering Editor Mode");
    this.disableDrag = false;
    this.disableRemove = false;
    this.disableResize = false;
    this.inFloorPlanEditorMode = true;
  }

  closeEditFloorPlan(): void{
    console.log("Exiting Editor Mode");
    this.disableDrag = true;
    this.disableRemove = true;
    this.disableResize = true;
    this.inFloorPlanEditorMode = false;
  }

  logOut(): void{
    sessionStorage.removeItem('jwt');
    this.router.navigate(['login']);
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("user-page");

    this.resizeSubscription.unsubscribe();
  }
}
