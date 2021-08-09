import { Component, HostListener, Input, OnInit } from "@angular/core";
import { ListSchema } from "../ListSchema";
import { CardStore } from "../CardStore";
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  @Input() list: ListSchema;
  @Input() cardStore: CardStore;
  displayAddCard = false;

  constructor() {}

  toggleDisplayAddCard() {
    this.displayAddCard = !this.displayAddCard;
    if(this.displayAddCard){
      document.getElementById("addCardInput").focus();
    }
  }

  ngOnInit(): void {}

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
    const cardId = this.cardStore.newCard(value, listName);
    this.list.cards.push(cardId);
  }
}
