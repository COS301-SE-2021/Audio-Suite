import { OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Logger } from '@nestjs/common';
import { MessageService } from 'src/message/message.service';
import { RoomService } from 'src/room/room.service';

interface ClientList{
  client: Socket,
  jwt: string,
  office: string,
  roomName: string,
}


@WebSocketGateway({cors: true, namespace: 'serversocket'})
export class ServerSocketGateway implements OnGatewayInit, OnGatewayDisconnect{

  private logger: Logger = new Logger('ServerSocketGateway');
  private clientList: ClientList[] = []
  
  @WebSocketServer() wss: Server;

  constructor(
    private messageService: MessageService,
    private roomService: RoomService){
  }

  afterInit(server: any) {
    this.logger.log('Initialised!')
  }

  async handleDisconnect(client: any) {
    var index = this.clientList.findIndex(item => {
      return item.client.id == client.id;
    })
    if(index > -1){
      var tmpOffice = this.clientList[index].office;
      await this.roomService.removeUserFromAllRooms(this.clientList[index].jwt);
      this.clientList.splice(index, 1);
      this.wss.to(tmpOffice).emit('updateRoomAttendance');
      this.logger.log('Clean up before disconnecting')
    }
    this.logger.log('Client: ' + client.id + ' disconnected');
  }

  //--------------------------------------------------------------------------------------------------------------------
  //------------------------------------Text channel Gateway------------------------------------------------------------
  //--------------------------------------------------------------------------------------------------------------------

  @SubscribeMessage('msgToServer')
  async handleMessage(client: Socket, message: { jwt: string, officeID: number, sender: string, channel: string, message: string }) {
    this.wss.to(message.channel).emit('msgToClient', message);
    await this.messageService.saveNewMessage(message.jwt, message.officeID, message.channel, message.sender, message.message);
  }

  @SubscribeMessage('joinRoomText')
  async handleRoomJoinText(client: Socket, data: {jwt: string, officeID: number, office: string, channel: string, isRoom: boolean} ) {
    client.join(data.channel);
    this.logger.log(client.id + ' joined the ' + data.channel + '.')
    const messageList = await this.messageService.getTextChannelMessages(data.jwt, data.channel, 0);
    client.emit('joinedRoomText', {
      Room: data.channel,
      MessageList: messageList.MessageList
    });

    if(data.isRoom){
      var newClient: ClientList = {
        client: client,
        jwt: data.jwt,
        office: data.office,
        roomName: data.channel
      };
      this.clientList.push(newClient);
      
      await this.roomService.addUserToRoomUsersFromRoomName(data.jwt, data.officeID, data.channel);
      this.wss.to(data.office).emit('updateRoomAttendance');
    }
  }

  @SubscribeMessage('leaveRoomText')
  async handleRoomLeaveText(client: Socket, data: {jwt: string, officeID: number, office: string, channel: string}) {
    client.leave(data.channel);
    this.logger.log(client.id + ' left the ' + data.channel + '.')
    client.emit('leftRoomText', data.channel);

    var index = this.clientList.findIndex(item => {
      return item.client.id == client.id;
    })
    if(index > -1){
      this.clientList.splice(index, 1);
    }

    await this.roomService.removeUserFromRoomUsersFromRoomName(data.jwt, data.officeID, data.channel);
    this.wss.to(data.office).emit('updateRoomAttendance');
  }

  //--------------------------------------------------------------------------------------------------------------------
  //------------------------------------Audio Channel Gateway------------------------------------------------------------
  //--------------------------------------------------------------------------------------------------------------------

  @SubscribeMessage('joinRoomAudio')
  handleRoomJoinAudio(client: Socket, data: {userID: string, room: string}) {
    client.join(data.room);
    this.logger.log(client.id + ' joined the Audio channel' + data.room + '.')
    //client.emit('joinedRoomAudio', room);
    this.wss.to(data.room).emit('joinedRoomAudio', data);
  }

  @SubscribeMessage('leaveRoomAudio')
  handleRoomLeaveAudio(client: Socket, data: {userID: string, room: string} ) {
    client.leave(data.room);
    this.logger.log(client.id + ' left the Audio channel' + data.room + '.')
    //client.emit('leftRoomAudio', room);
    this.wss.to(data.room).emit('leftRoomAudio', data);
  }
}

