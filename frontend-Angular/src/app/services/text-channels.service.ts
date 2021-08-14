import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class TextChannelsService {

  constructor(private socket: Socket) { }

  joinRoom(jwt: string, room: string){
    this.socket.emit('joinRoomText', {jwt: jwt, room: room});
  }

  leaveRoom(room: string){
    this.socket.emit('leaveRoomText', room);
  }

  sendMsgToServer(jwt: string, officeID: number, sender: string, room: string, message: string){
    this.socket.emit('msgToServer', {jwt: jwt, officeID: officeID, sender: sender, room: room, message: message});
  }

  listen(eventName: string){
    return this.socket.fromEvent<any>(eventName);
  }
}
