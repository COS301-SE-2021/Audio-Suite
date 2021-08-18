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
    this.kanbanService.deleteCard(sessionStorage.getItem('jwt'), 
    parseInt(sessionStorage.getItem('officeID')), 
    id).subscribe((response) =>{
      if(response.Response == "Success"){
        console.log("Card deleted successfully");
      }
    },
    (error) => {
      console.log(error)
    });
    
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
  }

} 