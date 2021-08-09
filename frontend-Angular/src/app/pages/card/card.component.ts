import { Component, Input, OnInit } from "@angular/core";
import { CardSchema } from "../cardschema";
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() card: CardSchema;
  constructor() {}
  ngOnInit() {}
  dragStart(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  deleteCard(id: string){
    // if(this.list.cards.length === 1){
      // this.list.cards.pop();
    // }
    // this.list.cards.splice(parseInt(id),1);
    console.log(id);

    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
  }

} 