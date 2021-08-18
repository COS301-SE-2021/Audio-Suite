import { Component, HostListener, Input, OnInit } from "@angular/core";
import { ListSchema } from "../listschema";
import { CardStore } from "../cardstore";
import { UserService } from "src/app/services/user.service";
import { OfficeRoomService } from "src/app/services/office-room.service";
import { KanbanService } from "src/app/services/kanban.service";
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  @Input() list: ListSchema;
  @Input() cardStore: CardStore;
  displayAddCard = false;

  userID: string = '';
  userFirstName: string = '';
  userLastName: string = '';
  userUsername: string = '';
  userEmail: string = '';

  constructor(
    private userService: UserService,
    private officeRoomService: OfficeRoomService,
    private kanbanService: KanbanService) {}

  toggleDisplayAddCard() {
    this.displayAddCard = !this.displayAddCard;
    if(this.displayAddCard){
      //document.getElementById("addCardInput").focus();
    }
  }

  ngOnInit(): void {
    console.log("The List of cards: ", this.list)
  }

  allowDrop($event) {
    $event.preventDefault();
  }

  drop($event) {
    $event.preventDefault();
    const data = $event.dataTransfer.getData("text");
    let target = $event.target;
    const targetClassName = target.className;

    while (target.className !== "list") {
      target = target.parentNode;
    }
    const newListName = target.id;
    target = target.querySelector(".cards");

    const cardID = data;
    const oldListName = ""

    this.kanbanService.getListName(
      sessionStorage.getItem('jwt'), 
      parseInt(sessionStorage.getItem('officeID')),
      data).subscribe((response) =>{
        if(response.Response == "Success"){
          //console.log("Card edited successfully");
          const oldListName = response.listName;
          this.kanbanService.editCard(
            sessionStorage.getItem('jwt'), 
            parseInt(sessionStorage.getItem('officeID')),
            cardID,
            oldListName,
            newListName).subscribe((response) =>{
              if(response.Response == "Success"){
                console.log("Card edited successfully");
              }
            },
            (error) => {
              console.log(error)
            });
        }
      },
      (error) => {
        console.log(error)
      });

    // const oldListName = document.getElementById(target.parentNode.children[0].className).textContent;

    if (targetClassName === "card") {
      $event.target.parentNode.insertBefore(
        document.getElementById(data),
        $event.target
      );
    } else if (targetClassName === "list__title") {
      if (target.children.length) {
        target.insertBefore(document.getElementById(data), target.children[0]);
      } else {
        target.appendChild(document.getElementById(data));
      }
    } else {
      target.appendChild(document.getElementById(data));
    }
  }

  onEnter(value: string, listName: string) {
    const cardId = this.cardStore.newCard(value, listName); 
    this.kanbanService.createCard(
      sessionStorage.getItem('jwt'), 
      parseInt(sessionStorage.getItem('officeID')),
      listName,
      cardId,
      value).subscribe((response) =>{
        if(response.Response == "Success"){
          console.log("Card added successfully");
        }
      },
      (error) => {
        console.log(error)
      });
    this.list.cards.push(cardId);
  }
}
