import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TextChannelsService } from 'src/app/services/text-channels.service';
import { CardStore } from '../CardStore';
import { ListSchema } from '../ListSchema';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  sidebarOpend = true;
  showOfficeList = true;
  officeSelected = false;
  selectedOffice = '';

  cardStore: CardStore;
  lists: ListSchema[];

  newMessageInput: string = "";

  constructor(private textChannelsService: TextChannelsService) { }

  setMockData(): void {
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
    this.lists = lists;
  }

  ngOnInit(): void {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("user-page");

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

  toggleSidebar(): void {
    this.sidebarOpend = !this.sidebarOpend;
  }

  selectOffice(office): void{
    this.selectedOffice = office;
    this.officeSelected = true;

    this.textChannelsService.joinRoom(office);
  }

  leaveOffice(): void{
    this.textChannelsService.leaveRoom(this.selectedOffice);

    this.selectedOffice = '';
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

  toggleQuickSettingsListView(): void{
    
  }

  sendMessage(): void{
    this.textChannelsService.sendMsgToServer("chris", this.selectedOffice, this.newMessageInput);
    this.newMessageInput = "";
  }

  receivedMessage(data: any): void{
    var newMessageObject = 
    `
     <p>${data.message}</p>
    `;
    document.getElementById("messageBoard").innerHTML += newMessageObject;
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("user-page");
  }
}
