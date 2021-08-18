import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class TextChannelsService {

  constructor(private socket: Socket) { }

  joinRoom(jwt: string, officeID: number, office: string, channel: string, isRoom: boolean){
    this.socket.emit('joinRoomText', {jwt: jwt, officeID: officeID, office: office, channel: channel, isRoom: isRoom});
  }

  leaveRoom(jwt: string, officeID: number, office: string, channel: string){
    this.socket.emit('leaveRoomText', {jwt, officeID, office, channel});
  }

  sendMsgToServer(jwt: string, officeID: number, sender: string, channel: string, message: string){
    this.socket.emit('msgToServer', {jwt: jwt, officeID: officeID, sender: sender, channel: channel, message: message});
  }

  listen(eventName: string){
    return this.socket.fromEvent<any>(eventName);
  }
}
