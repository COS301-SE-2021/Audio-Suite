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
import { KanbanService } from 'src/app/services/kanban.service';
import { TimeTrackingService } from 'src/app/services/time-tracking.service';
import * as $ from "jquery";
import 'round-slider';

interface Office{
  id: string,
  name: string,
  invite: string,
  role: string
}

interface FloorPlan{
  RoomID: number,
  RoomType: string,
  RoomLayout: KtdGridLayoutItem
}

interface RoomUsersList{
  Room: string,
  IconID: string,
  UserListID: string,
  RoomUsers: string[]
}

interface textMessage{
  sender: string,
  room: string,
  message: string
}

interface TimeTrackingUserInstance{
  id: number,
  userID: number,
  officeID: number, 
  description: string,
  projectID: number,
  projectName: string,
  tagID: number,
  tagName: string,
  startTime: string,
  endTime: string,
  date: string,
  startEnd: string,
  duration: string
}

interface TimeTrackingProject{
  id: number,
  officeID: number,
  project: string
}

interface TimeTrackingTag{
  id: number,
  officeID: number,
  tag: string
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit, OnDestroy, AfterViewInit {

  //#region Variables
  parentMessage = "message from parent"

  //Agora Audio Variables
  agoraConfig: AgoraConfig = {
    AppID: '023766436b244044ab85f65470dcbae2',
  };
  agoraService:AngularAgoraRtcService = new AngularAgoraRtcService(this.agoraConfig);
  audioComponent: AudioComponent;

  //Golbal Alert Variables
  showSuccessGlobalAlert: boolean = false;
  showPrimaryGlobalAlert: boolean = false;
  globalAlertType: string = "";
  globalAlertMsg: string = "";
  
  //Sidebar Varibales
  sidebarOpened: boolean = true;
  showOfficeList: boolean = true;
  showQuickSettingsList: boolean = true;
  showOfficeSettingsList: boolean = true;

  //Current Office Variables
  officeSelected: boolean = false;
  officeListLoaded: boolean = false;
  selectedOffice: string = '';
  selectedOfficeID: number = null;
  selectedOfficeInvite: string = '';
  selectedOfficeRole: string = '';
  officeList: Office[] = [];

  //Current Room Variables
  roomSelected: boolean = false;
  selectedRoom: string = '';
  selectedRoomID: string = '';

  //Current User Details
  userID: string = '';
  userFirstName: string = '';
  userLastName: string = '';
  userUsername: string = '';
  userEmail: string = '';

  //Modal Variables
  sendInviteToEmail: string = '';
  sendInviteToName: string = '';
  newRoomName: string = '';
  newRoomType: string = '';
  displayFormModal: boolean = false;
  showInviteModal: boolean = false;
  showAddRoomModal: boolean = false;
  focus6: boolean = false;
  focus7: boolean = false;
  sendNewOfficeAlert: boolean = false;
  sendJoinOfficeAlert: boolean = false;
  sendFormModalAlert: boolean = false;
  newOfficeName: string = '';
  joinOfficeCode: string = '';
  newMessageInput: string = '';
  newOfficeAlertMsg: string = '';
  joinOfficeAlertMsg: string = '';
  formModalAlertMsg: string = '';

  //Time Tracker Variables
  showTimeTrackerTab: string = 'timeTracker';
  trackerStarted: boolean = false;
  displayBigScreenTracker: boolean = true;
  timeTrackerDescription: string = '';
  timeTrackerProjectSelected: boolean = false;
  selectedProject: string = '';
  selectedProjectID: number = null;
  timeTrackerTagSelected: boolean = false;
  selectedTag: string = '';
  selectedTagID: number = null;
  newProjectName: string = '';
  newTagName: string = '';
  warningCount: number = 0;
  trackingTimerInterval: any = null;
  timeTrackingUserInstances: TimeTrackingUserInstance[] = [];
  timeTrackingProjects: TimeTrackingProject[] = [];
  timeTrackingTags: TimeTrackingTag[] = [];

  //Text Channel Variables
  officeTextChannelMessages: textMessage[] = [];
  roomTextChannelMessages: textMessage[] = [];
    //Text Channel auto scrolling Variables
    @ViewChild('scrollframe', {static: false}) scrollFrame: ElementRef;
    @ViewChildren('messageitem') itemElements: QueryList<any>;
    @ViewChild('scrollRoomframe', {static: false}) scrollRoomFrame: ElementRef;
    @ViewChildren('messageRoomitem') itemRoomElements: QueryList<any>;
    @ViewChild(KtdGridComponent, { static: true }) grid: KtdGridComponent;
    scrollContainer: any;
    scrollRoomContainer: any;

  //Kanban Variables
  cardStore: CardStore;
  lists: ListSchema[];

  //FloorPlan Variables
  cols = 12;
  rowHeight = 50;
  compactType: 'vertical' | 'horizontal' | null = null;
  floorPlan: FloorPlan[] = [];
  layout: KtdGridLayout = [];
  roomUsersList: RoomUsersList[] = [];
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
  //#endregion

  constructor(
    private textChannelsService: TextChannelsService,
    private officeRoomService: OfficeRoomService,
    private userService: UserService,
    private kanbanService: KanbanService,
    private timeTrackingService: TimeTrackingService,
    private router: Router) { }

  setListData(): void {
    this.cardStore = new CardStore();
    const lists: ListSchema[] = [
      {
        name: 'To Do',
        cards: []
      },
      {
        name: 'In Progress',
        cards: []
      },
      {
        name: 'Done',
        cards: []
      }
    ]
    //cards need id, description and list name.

    var jwt = sessionStorage.getItem('jwt');
    var officeID = sessionStorage.getItem('officeID');
    console.log(parseInt(officeID));
    this.kanbanService.getAllCards(jwt, parseInt(officeID)).subscribe((response) => {
      var cards = response.Cards;
      for(var i=0; i<cards.length; i++){
        var cardID =  cards[i].cardID;
        console.log(cardID);
        var retCard = this.cardStore.retrieveCard(cards[i].cardID, cards[i].cardMessage, cards[i].listName);
        if(cards[i].listName == "To Do"){
          lists[0].cards.push(cardID);
        }
        else if(cards[i].listName == "In Progress"){
          lists[1].cards.push(cardID);
        }
        else if(cards[i].listName == "Done"){
          lists[2].cards.push(cardID);
        }
      }
    },
    (error) => {
      console.log(error);
    })

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
    var jwt = sessionStorage.getItem('jwt');
    this.userService.getUserDetails(jwt).subscribe((response) => {
      this.userID = response.id;
      this.userFirstName = response.firstName;
      this.userLastName = response.lastName;
      this.userUsername = response.userName;
      this.userEmail = response.email;

      this.audioComponent = new AudioComponent( this.agoraService, this.officeRoomService );

      this.getUserOfficeList();
    },
    (error) => {
      console.log(error);
      this.router.navigate(['login']);
    })

    var body = document.getElementsByTagName("body")[0];
    body.classList.add("user-page");
    // this.audioComponent = new AudioComponent( this.agoraService, this.officeRoomService );

    // this.getUserDetails();
    // this.getUserOfficeList();

    this.textChannelsService.listen("joinedRoomText").subscribe(data => {
      console.log("Joined room: ", data);
      if(data.Room == this.selectedOffice){
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

    this.textChannelsService.listen("updateRoomAttendance").subscribe(data => {
      let jwt = window.sessionStorage.getItem('jwt');
      this.getRoomUsersByOfficeID(jwt, this.selectedOfficeID);
    })

    window.addEventListener("resize", () => {
      if(window.innerWidth < 800){
        document.getElementById('Sidebar').style.display = "none";
        document.getElementById('Content').style.marginLeft = "0%"
        document.getElementById('Content').style.width = "100%";
        document.getElementById('TextChannelContent').style.width = "100%";
      }
      else if(window.innerWidth < 1200){
        document.getElementById('Sidebar').style.display = "none";
        document.getElementById('Content').style.marginLeft = "0%";
        document.getElementById('Content').style.width = "100%";
        document.getElementById('TextChannelContent').style.width = "100%";
      }
      else if(window.innerWidth < 1400){
        this.sidebarOpened = true;
        document.getElementById('Sidebar').style.width = "20%";
        document.getElementById('Sidebar').style.display = "block";
        document.getElementById('Content').style.marginLeft = "20%";
        document.getElementById('TextChannelContent').style.width = "80%";
      }
      else if(window.innerWidth >= 1400){
        this.sidebarOpened = true;
        document.getElementById('Sidebar').style.width = "15%";
        document.getElementById('Sidebar').style.display = "block";
        document.getElementById('Content').style.marginLeft = "15%";
        document.getElementById('TextChannelContent').style.width = "86%";
      }
    })
  }

  ngAfterViewInit(): void {
    if(window.innerWidth < 1200){
      this.sidebarOpened = false;

      document.getElementById('Sidebar').style.display = "none";
      document.getElementById('Content').style.marginLeft = "0%";
      document.getElementById('Content').style.width = "100%";
      document.getElementById('TextChannelContent').style.width = "100%";
    }

    $("#slider").roundSlider({
      radius: 85,
      sliderType: "default",
      value: 40
  });

  }

  getUserOfficeList(): void{
    var jwt = sessionStorage.getItem("jwt");
    this.officeRoomService.getUserOffices(jwt).subscribe((response) =>{
      console.log(response)
      for(let i = 0; i < response.Offices.length; i++) {
        var newOffice = {
          id: response.Offices[i].id, 
          name: response.Offices[i].name, 
          invite: response.Offices[i].invite, 
          role: response.Offices[i].role
        }
        this.officeList.push(newOffice);
      }
      this.officeListLoaded = true;
    },
    (error) => {
      console.log(error);
    })
  }

  closeAlert(){
    console.log("click working")
    this.showSuccessGlobalAlert = false;
    this.showPrimaryGlobalAlert = false;
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
      this.router.navigate(['login']);
    })
  }

  toggleSidebar(): void {
    this.sidebarOpened = !this.sidebarOpened;
    if(this.sidebarOpened){
      document.getElementById('Sidebar').style.display = "block";

      if(window.innerWidth < 600){
        document.getElementById('Sidebar').style.width = "100%";
      }
      else if(window.innerWidth < 800){
        document.getElementById('Sidebar').style.width = "60%";
      }
      else if(window.innerWidth < 1200){
        document.getElementById('Sidebar').style.width = "30%";
        document.getElementById('TextChannelContent').style.width = "86%";
      }
      else if(window.innerWidth < 1400){
        document.getElementById('Sidebar').style.width = "20%";
        document.getElementById('Content').style.marginLeft = "20%";
        document.getElementById('TextChannelContent').style.width = "86%";
      }
      else{
        document.getElementById('Sidebar').style.width = "15%";
        document.getElementById('Content').style.marginLeft = "15%";
        document.getElementById('TextChannelContent').style.width = "86%";
      }
    }
    else{
      document.getElementById('Sidebar').style.display = "none";
      document.getElementById('Content').style.marginLeft = "0%";
      document.getElementById('Content').style.width = "100%";
      document.getElementById('TextChannelContent').style.width = "100%";
    }
  }

  async selectOffice(officeID, office, officeInvite, role){
    var officeId = sessionStorage.setItem('officeID', officeID);
    if(this.officeSelected){
      
      if(this.selectedOffice != office){
        this.leaveOffice();
        this.layout = [];
        var jwt = sessionStorage.getItem('jwt');
        this.officeRoomService.getOfficeRoomList(jwt, officeID).subscribe((response) => {
          console.log(response);
          if(response.Response == "Success"){
            let newFloorPlan: FloorPlan[] = [];
            let newLayout: KtdGridLayout = [];
            response.Rooms.forEach((room) => {
              let newRoomLayout: KtdGridLayoutItem = { 
                id: room.roomName, 
                x: room.xCoordinate, 
                y: room.yCoordinate, 
                w: room.width, 
                h: room.height 
              };
  
              let newRoom: FloorPlan = {
                RoomID: room.id,
                RoomType: room.roomType,
                RoomLayout: newRoomLayout
              }
  
              newLayout.push(newRoomLayout);
              newFloorPlan.push(newRoom);
            })
  
            this.layout = newLayout;
            this.floorPlan = newFloorPlan;
          }
        },
        (error) => {
          console.log(error);
        });

        this.getRoomUsersByOfficeID(jwt, officeID);

        this.selectedOffice = office;
        this.selectedOfficeID = officeID;
        this.selectedOfficeInvite = officeInvite;
        this.selectedOfficeRole = role;
        this.officeSelected = true;
        var jwt = sessionStorage.getItem('jwt');
        this.textChannelsService.joinRoom(jwt, officeID, office, office, false);
        this.setListData();
        this.getOfficeProjectList();
      }
    }
    else{
      var jwt = sessionStorage.getItem('jwt');
      this.officeRoomService.getOfficeRoomList(jwt, officeID).subscribe((response) => {
        console.log(response);
        if(response.Response == "Success"){
          let newFloorPlan: FloorPlan[] = [];
          let newLayout: KtdGridLayout = [];
          response.Rooms.forEach((room) => {
            let newRoomLayout: KtdGridLayoutItem = { 
              id: room.roomName, 
              x: room.xCoordinate, 
              y: room.yCoordinate, 
              w: room.width, 
              h: room.height 
            };

            let newRoom: FloorPlan = {
              RoomID: room.id,
              RoomType: room.roomType,
              RoomLayout: newRoomLayout
            }

            newLayout.push(newRoomLayout);
            newFloorPlan.push(newRoom);
          })

          this.layout = newLayout;
          this.floorPlan = newFloorPlan;
        }
      },
      (error) => {
        console.log(error);
      });

      this.getRoomUsersByOfficeID(jwt, officeID)

      this.selectedOffice = office;
      this.selectedOfficeID = officeID;
      this.selectedOfficeInvite = officeInvite;
      this.selectedOfficeRole = role;
      this.officeSelected = true;
      var jwt = sessionStorage.getItem('jwt');
      this.textChannelsService.joinRoom(jwt, officeID, office, office, false);
      this.setListData();
      this.getOfficeProjectList();
    }
  }

  async getRoomUsersByOfficeID(jwt: string, officeID: number){
    this.officeRoomService.getRoomUsersByOfficeID(jwt, officeID).subscribe((response) => {
      // console.log(response)
      this.roomUsersList = [];
      response.RoomUserList.forEach((roomUserItem) => {
        let users: string[] = [];
        roomUserItem.RoomUsers.forEach((roomUser) => {
          users.push(roomUser.userName);
        })

        let roomUserListItem: RoomUsersList = {
          Room: roomUserItem.Room,
          IconID: roomUserItem.Room + "-Icon",
          UserListID: roomUserItem.Room + "-List",
          RoomUsers: users
        };
        this.roomUsersList.push(roomUserListItem);
      })

      console.log(this.roomUsersList);
    },
    (error) => {
      console.log(error)
    })
  }

  tabSetOpened(): void {
    this.scrollContainer = this.scrollFrame.nativeElement;  
    this.itemElements.changes.subscribe(_ => this.scrollMessageBoardToBottom());

    if(this.roomSelected){
      this.scrollRoomContainer = this.scrollRoomFrame.nativeElement;
      this.itemRoomElements.changes.subscribe(_ => {this.scrollRoomMessageBoardToBottom()});
    }
  }

  leaveOffice(): void{
    var jwt = sessionStorage.getItem('jwt');
    this.textChannelsService.leaveRoom(jwt, this.selectedOfficeID, this.selectedOffice, this.selectedOffice);
    if(this.roomSelected){
      this.leaveRoom();
    }
    
    if(this.trackerStarted){
      this.warningCount = 0;
      this.closeAlert();

      clearInterval(this.trackingTimerInterval);
      this.trackerStarted = false;
      document.getElementById('timerSecond').innerText = "00";
      document.getElementById('timerMinute').innerText = "00";
      document.getElementById('timerHour').innerText = "00";

      let sessionStorageID = "startDateTime_" + this.selectedOffice;
      let storedStartDate = JSON.parse(window.sessionStorage.getItem(sessionStorageID));
      let startDate = new Date(
        storedStartDate.Year, 
        storedStartDate.Month, 
        storedStartDate.Day, 
        storedStartDate.Hours, 
        storedStartDate.Minutes, 
        storedStartDate.Seconds, 
        storedStartDate.MilliSeconds
      );
      window.sessionStorage.removeItem(sessionStorageID)
      let endDate = new Date();

      if(this.timeTrackerDescription == ""){
        let autoGeneratedDescription = 
          this.userUsername + " - " + 
          startDate.getFullYear() + ":" + 
          startDate.getMonth() + ":" + 
          startDate.getDate() + "-" + 
          startDate.getHours() + ":" + 
          startDate.getMinutes() + ":" + 
          startDate.getSeconds();
      
        let jwt = sessionStorage.getItem('jwt');
        this.timeTrackingService.registerNewTimeTrackingInstance(
          jwt,
          this.selectedOfficeID,
          autoGeneratedDescription,
          this.selectedProjectID,
          this.selectedTagID,
          startDate.getTime() + "",
          endDate.getTime() + ""
        ).subscribe((response) => {
          console.log(response)
        }, 
        (error) => {
          console.log(error)
        })
      }
      else{
        let jwt = sessionStorage.getItem('jwt');
        this.timeTrackingService.registerNewTimeTrackingInstance(
          jwt,
          this.selectedOfficeID,
          this.timeTrackerDescription,
          this.selectedProjectID,
          this.selectedTagID,
          startDate.getTime() + "",
          endDate.getTime() + ""
        ).subscribe((response) => {
          console.log(response)
          this.timeTrackerDescription = "";
          this.removeSelectedProject();
          this.removeSelectedTag();
        }, 
        (error) => {
          console.log(error)
          this.timeTrackerDescription = "";
          this.removeSelectedProject();
          this.removeSelectedTag();
        })
      }
    }

    this.selectedOffice = '';
    this.selectedOfficeID = null;
    this.selectedOfficeInvite = '';
    this.officeSelected = false;
    this.officeTextChannelMessages = [];
    this.roomUsersList = [];
    this.audioComponent.leave();
  }

  selectRoom(id: string, roomType: string, leaveRoom: boolean): void{
    // console.log("Room Type: " + roomType)
    if(leaveRoom){
      var jwt = sessionStorage.getItem('jwt');
      this.textChannelsService.leaveRoom(jwt, this.selectedOfficeID, this.selectedOffice, id);
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
          this.textChannelsService.joinRoom(jwt, this.selectedOfficeID, this.selectedOffice, id, true);
          setTimeout(() => {this.audioComponent.join(this.userID, this.selectedOfficeID, this.selectedRoom, this.selectedOffice)}, 2000);
        }
      }
      else{
        this.roomSelected = true;
        this.selectedRoom = id;
        var jwt = sessionStorage.getItem('jwt');
        this.textChannelsService.joinRoom(jwt, this.selectedOfficeID, this.selectedOffice, id, true);
        setTimeout(() => {this.audioComponent.join(this.userID, this.selectedOfficeID, this.selectedRoom, this.selectedOffice)}, 2000);
      }
    }
  }

  leaveRoom(): void{
    var jwt = sessionStorage.getItem('jwt');
    this.textChannelsService.leaveRoom(jwt, this.selectedOfficeID, this.selectedOffice, this.selectedRoom);
    this.roomSelected = false;
    this.selectedRoom = '';
    this.roomTextChannelMessages = [];
  }

  addRoom(): void{
    console.log("add room: " + this.newRoomName)
    console.log('new room type: ' + this.newRoomType);
    var newRoomLayout: KtdGridLayoutItem = {
      id: this.newRoomName,
      x: 0,
      y: 0,
      w: 1,
      h: 1
    };

    var newLayout: KtdGridLayout = [];
    this.layout.forEach(room => {
      var oldRoomLayout: KtdGridLayoutItem = {
        id: room.id,
        x: room.x,
        y: room.y,
        w: room.w,
        h: room.h
      };
      newLayout.push(oldRoomLayout);
    })
    newLayout.push(newRoomLayout);

    var jwt = sessionStorage.getItem('jwt');
    this.officeRoomService.registerRoom(
      jwt, 
      this.selectedOfficeID, 
      this.newRoomName,
      this.newRoomType,
      0, 
      0, 
      1, 
      1).subscribe((response) => {
        console.log(response);
        if(response.Response == "Success"){
          let newRoom: FloorPlan = {
            RoomID: response.Room.id,
            RoomType: response.Room.roomType,
            RoomLayout: newRoomLayout
          };
          this.layout = newLayout;
          this.floorPlan.push(newRoom);
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
        let newFloorPlan: FloorPlan[] = [];
        let newLayout: KtdGridLayout = [];
        response.Rooms.forEach((room) => {
          let newRoomLayout: KtdGridLayoutItem = { 
            id: room.roomName, 
            x: room.xCoordinate, 
            y: room.yCoordinate, 
            w: room.width, 
            h: room.height 
          };

          let newRoom: FloorPlan = {
            RoomID: room.id,
            RoomType: room.roomType,
            RoomLayout: newRoomLayout
          }

          newLayout.push(newRoomLayout);
          newFloorPlan.push(newRoom);
        })

        this.layout = newLayout;
        this.floorPlan = newFloorPlan;
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
        this.getRoomTypeByRoomID(room.id),
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

  getRoomTypeByRoomID(roomName: string): any{
    let type: string = 'Normal';
    this.floorPlan.forEach((room) => {
      if(room.RoomLayout.id == roomName){
        type = room.RoomType;
      }
    });
    return type;
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

  toggleRoomListView(IconID: string, ListID: string): void{
    let icon = document.getElementById(IconID);
    if(icon.classList.contains("icon-minimal-down")){
      icon.classList.replace("icon-minimal-down", "icon-minimal-right");
      document.getElementById(ListID).style.display = "none";
    }
    else{
      icon.classList.replace("icon-minimal-right", "icon-minimal-down");
      document.getElementById(ListID).style.display = "block";
    }
  }

  scrollMessageBoardToBottom(): void{
    var messageBoard = document.getElementById("messageBoard");
    messageBoard.scrollTop = messageBoard.scrollHeight;
  }

  scrollRoomMessageBoardToBottom(): void{
    var messageBoard = document.getElementById("messageBoardRoom");
    if(messageBoard != null){
      messageBoard.scrollTop = messageBoard.scrollHeight;
    }
  }

  sendMessage(room: string): void{
    console.log("send message room: " + room);
    if(this.newMessageInput != "")
    {
      var jwt = sessionStorage.getItem('jwt');
      this.textChannelsService.sendMsgToServer(jwt, this.selectedOfficeID, this.userUsername, room, this.newMessageInput);
      this.newMessageInput = "";
    }
  }

  receivedMessage(data: any): void{
    var message = {
      sender: data.sender,
      room: data.channel,
      message: data.message
    }
    if(data.channel == this.selectedOffice){
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

  setTimeTrackerTab(tab: string){
    this.showTimeTrackerTab = tab;
  }

  async getUserTrackingInstances(){
    let jwt = sessionStorage.getItem('jwt');
    this.timeTrackingService.getAllUserOfficeTimeTrackingInstances(jwt, this.selectedOfficeID).subscribe((response) => {
      let tempArray: TimeTrackingUserInstance[] = [];
      response.TrackingInstances.forEach((instance) => {
        let projectName = "";
        if(instance.projectID != null){
          this.timeTrackingProjects.forEach((project) => {
            if(project.id == instance.projectID){
              projectName = project.project;
            }
          })
        }
        
        let tagName = "";
        if(instance.tagID != null){
          this.timeTrackingTags.forEach((tag) => {
            if(instance.tagID == tag.id){
              tagName = tag.tag;
            }
          })
        }


        let startTime = new Date(Number(instance.startTime));
        let endTime = new Date(Number(instance.endTime));

        let date = 
          startTime.getFullYear() + ":" + 
          startTime.getMonth() + ":" + 
          startTime.getDate();
        let startEnd = 
          startTime.getHours() + ":" + 
          startTime.getMinutes() + " - " + 
          endTime.getHours() + ":" + 
          endTime.getMinutes();
        
        let time = endTime.getTime() - startTime.getTime();
        let hours = "00";
        let minutes = "00";
        let seconds = "00";

        time = Math.floor(time/1000);
        if(time >= 3600){
          let tempDuration = time;
          let numHours = Math.floor(tempDuration/3600);
          time = time - (numHours*3600);
          hours = "" + numHours;
        }
        
        if(time >= 60){
          let tempDuration = time;
          let numMinutes = Math.floor(tempDuration/60);
          time = time - (numMinutes*60);
          minutes = "" + numMinutes;
        }

        if(time > 0){
          seconds = "" + time;
        }

        let duration = hours + ":" + minutes + ":" + seconds;

        let newInstance:TimeTrackingUserInstance = {
          id: instance.id,
          userID: instance.userID,
          officeID: instance.officeID, 
          description: instance.description,
          projectID: instance.projectID,
          projectName: projectName,
          tagID: instance.tagID,
          tagName: tagName,
          startTime: instance.startTime,
          endTime: instance.endTime,
          date: date,
          startEnd: startEnd,
          duration: duration
        }

        tempArray.push(newInstance);
      })

      this.timeTrackingUserInstances = tempArray.reverse();
      console.log("Completed Instances: ", this.timeTrackingUserInstances)
    },
    (error) => {
      console.log(error);
    })
  }

  async getOfficeTagList(){
    let jwt = sessionStorage.getItem('jwt');
    this.timeTrackingService.getAllTimeTrackingTags(jwt, this.selectedOfficeID).subscribe((response) => {
      let tagList: TimeTrackingTag[] = [];
      response.Tags.forEach((tag) => {
        let newTag: TimeTrackingTag = {
          id: tag.id,
          officeID: tag.officeID,
          tag: tag.tag
        };
        tagList.push(newTag);
      })
      this.timeTrackingTags = tagList;
      this.getUserTrackingInstances();
    },
    (error) => {
      console.log(error);
    })
  }

  async getOfficeProjectList(){
    let jwt = sessionStorage.getItem('jwt');
    this.timeTrackingService.getAllTimeTrackingProjects(jwt, this.selectedOfficeID).subscribe((response) => {
      let projectList: TimeTrackingProject[] = [];
      response.Projects.forEach((project) => {
        let newProject: TimeTrackingProject = {
          id: project.id,
          officeID: project.officeID,
          project: project.project
        }
        projectList.push(newProject);
      })
      this.timeTrackingProjects = projectList;
      this.getOfficeTagList();
    })
  }

  startTrackingTimer(){
    if(this.trackerStarted){
      this.showPrimaryGlobalAlert = true;
      this.globalAlertType = "Warning - ";
      this.globalAlertMsg = "There is a timer already running."
    }
    else{
      this.startTimerInterval();
      this.trackerStarted = true;
      let today = new Date();
      let date = {
        Day: today.getDate(),
        Month: today.getMonth(),
        Year: today.getFullYear(),
        MilliSeconds: today.getMilliseconds(),
        Seconds: today.getSeconds(),
        Minutes: today.getMinutes(),
        Hours: today.getHours()
    }
    let sessionStorageID = "startDateTime_" + this.selectedOffice;
    window.sessionStorage.setItem(sessionStorageID, JSON.stringify(date));
    }
  }

  startTimerInterval(){
    this.trackingTimerInterval = setInterval(() => {
      let seconds = document.getElementById('timerSecond');
      let minutes = document.getElementById('timerMinute');
      let hours = document.getElementById('timerHour');

      if(Number(seconds.innerText) == 59){
        seconds.innerText = "00";
        if(Number(minutes.innerText) == 59){
          minutes.innerText = "00";
          let newHours = String(Number(hours.innerText) + 1);
          if(newHours.length == 1){
            hours.innerText = "0" + newHours;
          }
          else{
            hours.innerText = newHours;
          }
        }
        else{
          let newMinutes = String(Number(minutes.innerText) + 1);
          if(newMinutes.length == 1){
            minutes.innerText = "0" + newMinutes;
          }
          else{
            minutes.innerText = newMinutes;
          } 
        }
      }
      else{
        let newSeconds = String(Number(seconds.innerText) + 1);
        if(newSeconds.length == 1){
          seconds.innerText = "0" + newSeconds;
        }
        else{
          seconds.innerText = newSeconds;
        }
      }
    }, 1000);
  }

  stopTrackingTimer(){
    if(this.trackerStarted){
      if(this.timeTrackerDescription != ""){
        this.warningCount = 0;
        this.closeAlert();
        clearInterval(this.trackingTimerInterval);
        this.trackerStarted = false;
        document.getElementById('timerSecond').innerText = "00";
        document.getElementById('timerMinute').innerText = "00";
        document.getElementById('timerHour').innerText = "00";

        let sessionStorageID = "startDateTime_" + this.selectedOffice;
        let storedStartDate = JSON.parse(window.sessionStorage.getItem(sessionStorageID));
        let startDate = new Date(
          storedStartDate.Year, 
          storedStartDate.Month, 
          storedStartDate.Day, 
          storedStartDate.Hours, 
          storedStartDate.Minutes, 
          storedStartDate.Seconds, 
          storedStartDate.MilliSeconds
        );
        window.sessionStorage.removeItem(sessionStorageID)
        let endDate = new Date();
        
        let jwt = sessionStorage.getItem('jwt');
        this.timeTrackingService.registerNewTimeTrackingInstance(
          jwt,
          this.selectedOfficeID,
          this.timeTrackerDescription,
          this.selectedProjectID,
          this.selectedTagID,
          startDate.getTime() + "",
          endDate.getTime() + ""
        ).subscribe((response) => {
          console.log(response)
          this.timeTrackerDescription = "";
          this.removeSelectedProject();
          this.removeSelectedTag();
          this.getUserTrackingInstances();
        }, 
        (error) => {
          console.log(error)
          this.timeTrackerDescription = "";
          this.removeSelectedProject();
          this.removeSelectedTag();
        })
      }
      else if(this.warningCount == 1){
        this.warningCount = 0;
        this.closeAlert();

        clearInterval(this.trackingTimerInterval);
        this.trackerStarted = false;
        document.getElementById('timerSecond').innerText = "00";
        document.getElementById('timerMinute').innerText = "00";
        document.getElementById('timerHour').innerText = "00";

        let sessionStorageID = "startDateTime_" + this.selectedOffice;
        let storedStartDate = JSON.parse(window.sessionStorage.getItem(sessionStorageID));
        let startDate = new Date(
          storedStartDate.Year, 
          storedStartDate.Month, 
          storedStartDate.Day, 
          storedStartDate.Hours, 
          storedStartDate.Minutes, 
          storedStartDate.Seconds, 
          storedStartDate.MilliSeconds
        );
        window.sessionStorage.removeItem(sessionStorageID)
        let endDate = new Date();

        let autoGeneratedDescription = 
          this.userUsername + " - " + 
          startDate.getFullYear() + ":" + 
          startDate.getMonth() + ":" + 
          startDate.getDate() + "-" + 
          startDate.getHours() + ":" + 
          startDate.getMinutes() + ":" + 
          startDate.getSeconds();
        
        let jwt = sessionStorage.getItem('jwt');
        this.timeTrackingService.registerNewTimeTrackingInstance(
          jwt,
          this.selectedOfficeID,
          autoGeneratedDescription,
          this.selectedProjectID,
          this.selectedTagID,
          startDate.getTime() + "",
          endDate.getTime() + ""
        ).subscribe((response) => {
          console.log(response)
          this.timeTrackerDescription = "";
          this.removeSelectedProject();
          this.removeSelectedTag();
          this.getUserTrackingInstances();
        }, 
        (error) => {
          console.log(error)
          this.timeTrackerDescription = "";
          this.removeSelectedProject();
          this.removeSelectedTag();
        })
      }
      else{
        this.closeAlert();
        this.warningCount++;
        this.showPrimaryGlobalAlert = true;
        this.globalAlertType = "Error - ";
        this.globalAlertMsg = "Please add a description before ending the time tracking instance.";
      }
    }
  }

  setTimeTrackerProject(projectID: number, project: string){
    this.timeTrackerProjectSelected = true;
    this.selectedProjectID = projectID;
    this.selectedProject = project;
  }

  removeSelectedProject(){
    this.timeTrackerProjectSelected = false;
    this.selectedProjectID = null;
    this.selectedProject = "";
  }

  setTimeTrackerTag(tagID: number, tag: string){
    this.timeTrackerTagSelected = true;
    this.selectedTagID = tagID;
    this.selectedTag = tag;
  }

  removeSelectedTag(){
    this.timeTrackerTagSelected = false;
    this.selectedTagID = null;
    this.selectedTag = "";
  }

  addNewProject(){
    let jwt = sessionStorage.getItem('jwt');
    this.timeTrackingService.registerNewTimeTrackingProject(jwt, this.selectedOfficeID, this.newProjectName).subscribe((response) => {
      this.newProjectName = "";
      let newProject: TimeTrackingProject = {
        id: response.Project.id,
        officeID: response.Project.officeID,
        project: response.Project.project
      };
      let tempArray: TimeTrackingProject[] = [];
      tempArray.push(newProject);
      this.timeTrackingProjects.forEach((project) => {
        let tempProject: TimeTrackingProject = {
          id: project.id,
          officeID: project.officeID,
          project: project.project
        };
        tempArray.push(tempProject);
      })
      this.timeTrackingProjects = tempArray;
    },
    (error) => {
      console.log(error)
      this.newProjectName = "";
      this.closeAlert();
      this.showPrimaryGlobalAlert = true;
      this.globalAlertType = "Error - ";
      this.globalAlertMsg = error.error.message;
    })
  }

  deleteProject(id: number){
    let jwt = sessionStorage.getItem('jwt');
    this.timeTrackingService.removeTimeTrackingProjectByID(jwt, id).subscribe((response) => {
      let tempArray: TimeTrackingProject[] = [];
      this.timeTrackingProjects.forEach((project) => {
        if(project.id != id){
          let tempProject: TimeTrackingProject = {
            id: project.id,
            officeID: project.officeID,
            project: project.project
          };
          tempArray.push(tempProject);
        }
      })
      this.timeTrackingProjects = tempArray;
    },
    (error) => {
      console.log(error)
    })
  }

  addNewTag(){
    let jwt = sessionStorage.getItem('jwt');
    this.timeTrackingService.registerNewTimeTrackingTag(jwt, this.selectedOfficeID, this.newTagName).subscribe((response) => {
      this.newTagName = "";
      let newTag: TimeTrackingTag = {
        id: response.Tag.id,
        officeID: response.Tag.officeID,
        tag: response.Tag.tag
      };
      let tempArray: TimeTrackingTag[] = [];
      tempArray.push(newTag);
      this.timeTrackingTags.forEach((tag) => {
        let tempTag: TimeTrackingTag = {
          id: tag.id,
          officeID: tag.officeID,
          tag: tag.tag
        };
        tempArray.push(tempTag);
      })
      this.timeTrackingTags = tempArray;
    },
    (error) => {
      console.log(error)
      this.newTagName = "";
      this.closeAlert();
      this.showPrimaryGlobalAlert = true;
      this.globalAlertType = "Error - ";
      this.globalAlertMsg = error.error.message;
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

    if(this.trackerStarted){
      this.warningCount = 0;
      this.closeAlert();

      clearInterval(this.trackingTimerInterval);
      this.trackerStarted = false;
      document.getElementById('timerSecond').innerText = "00";
      document.getElementById('timerMinute').innerText = "00";
      document.getElementById('timerHour').innerText = "00";

      let sessionStorageID = "startDateTime_" + this.selectedOffice;
      let storedStartDate = JSON.parse(window.sessionStorage.getItem(sessionStorageID));
      let startDate = new Date(
        storedStartDate.Year, 
        storedStartDate.Month, 
        storedStartDate.Day, 
        storedStartDate.Hours, 
        storedStartDate.Minutes, 
        storedStartDate.Seconds, 
        storedStartDate.MilliSeconds
      );
      window.sessionStorage.removeItem(sessionStorageID)
      let endDate = new Date();

      if(this.timeTrackerDescription == ""){
        let autoGeneratedDescription = 
          this.userUsername + " - " + 
          startDate.getFullYear() + ":" + 
          startDate.getMonth() + ":" + 
          startDate.getDate() + "-" + 
          startDate.getHours() + ":" + 
          startDate.getMinutes() + ":" + 
          startDate.getSeconds();
      
        let jwt = sessionStorage.getItem('jwt');
        this.timeTrackingService.registerNewTimeTrackingInstance(
          jwt,
          this.selectedOfficeID,
          autoGeneratedDescription,
          this.selectedProjectID,
          this.selectedTagID,
          startDate.getTime() + "",
          endDate.getTime() + ""
        ).subscribe((response) => {
          console.log(response)
          this.timeTrackerDescription = "";
          this.removeSelectedProject();
          this.removeSelectedTag();
        }, 
        (error) => {
          console.log(error)
          this.timeTrackerDescription = "";
          this.removeSelectedProject();
          this.removeSelectedTag();
        })
      }
      else{
        let jwt = sessionStorage.getItem('jwt');
        this.timeTrackingService.registerNewTimeTrackingInstance(
          jwt,
          this.selectedOfficeID,
          this.timeTrackerDescription,
          this.selectedProjectID,
          this.selectedTagID,
          startDate.getTime() + "",
          endDate.getTime() + ""
        ).subscribe((response) => {
          console.log(response)
          this.timeTrackerDescription = "";
          this.removeSelectedProject();
          this.removeSelectedTag();
        }, 
        (error) => {
          console.log(error)
          this.timeTrackerDescription = "";
          this.removeSelectedProject();
          this.removeSelectedTag();
        })
      }
    }
  }
}
