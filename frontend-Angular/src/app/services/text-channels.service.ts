import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class TextChannelsService {

  constructor(private socket: Socket) { }

  joinRoom(room: string){
    this.socket.emit('joinRoom', room);
  }

  leaveRoom(room: string){
    this.socket.emit('leaveRoom', room);
  }

  sendMsgToServer(sender: string, room: string, message: string){
    this.socket.emit('msgToServer', {sender: sender, room: room, message: message});
  }

  listen(eventName: string){
    return this.socket.fromEvent<any>(eventName);
  }
}
