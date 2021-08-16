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
      document.getElementById("addCardInput").focus();
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
    
    console.log(target);
    console.log(targetClassName);

    while (target.className !== "list") {
      target = target.parentNode;
    }
    target = target.querySelector(".cards");

    console.log(target);

    if (targetClassName === "card") {
      console.log("card statement");
      $event.target.parentNode.insertBefore(
        document.getElementById(data),
        $event.target
      );
    } else if (targetClassName === "list__title") {
      console.log("else if statement");
      if (target.children.length) {
        console.log("if if statement");
        target.insertBefore(document.getElementById(data), target.children[0]);
      } else {
        console.log("if else statement");
        target.appendChild(document.getElementById(data));
      }
    } else {
      console.log("else");
      target.appendChild(document.getElementById(data));
    }
  }

  onEnter(value: string, listName: string) {
    console.log(sessionStorage.getItem('jwt'));
    console.log(sessionStorage.getItem('officeID'));
    console.log(listName);
    console.log(value);
    const cardId = this.cardStore.newCard(value, listName); 
    console.log(cardId);
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
    console.log("here??")
    this.list.cards.push(cardId);
  }
}
