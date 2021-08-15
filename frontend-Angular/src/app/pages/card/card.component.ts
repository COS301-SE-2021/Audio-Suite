import { Component, Input, OnInit } from "@angular/core";
import { KanbanService } from "src/app/services/kanban.service";
import { CardSchema } from "../cardschema";
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() card: CardSchema;
  constructor(private kanbanService: KanbanService) {}
  ngOnInit() {}
  dragStart(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  deleteCard(id: string){
    // if(this.list.cards.length === 1){
      // this.list.cards.pop();
    // }
    // this.list.cards.splice(parseInt(id),1);
    //id is cardId
    console.log(id);
    console.log(sessionStorage.getItem('jwt'));
    console.log(sessionStorage.getItem('officeID'));
    this.kanbanService.deleteCard(sessionStorage.getItem('jwt'), parseInt(sessionStorage.getItem('officeID')), id);
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
  }

} 