import { CardSchema } from "./cardschema";
export class CardStore {
  cards: Object = {};
  lastid = -1;

  _addCard(card: CardSchema) {
    card.id = String(++this.lastid);
    this.cards[card.id] = card;
    return card.id;
  }

  retrieveCard(cardId: string, description: string, listName:string){
    const card = new CardSchema();
    card.description = description;
    card.listName = listName;
    card.id = cardId;
    this.cards[cardId]=card;
    if(parseInt(cardId)>=this.lastid){
      this.lastid=parseInt(cardId);
    }
    return this.cards[cardId];
  }

  getCard(cardId: string) {
    console.log("right track");
    console.log(cardId);
    console.log(this.cards);
    // if(this.cards[cardId] == null){
    //   this.retrieveCard(cardId, description, listName);
    // }
    return this.cards[cardId];
  }
  
  newCard(description: string, listName:string): string {
    const card = new CardSchema();
    card.description = description;
    card.listName = listName;
    return this._addCard(card);
  }
}
