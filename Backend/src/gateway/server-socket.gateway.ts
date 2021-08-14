import { OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Logger } from '@nestjs/common';
import { RoomUsersService } from 'src/roomusers/roomusers.service';
import { MessageService } from 'src/message/message.service';


@WebSocketGateway({cors: true, namespace: 'serversocket'})
export class ServerSocketGateway implements OnGatewayInit{

  private logger: Logger = new Logger('ServerSocketGateway');
  
  @WebSocketServer() wss: Server;

  constructor(
    private messageService: MessageService,
    private roomUsersService: RoomUsersService){
  }

  afterInit(server: any) {
    this.logger.log('Initialised!')
  }

  //--------------------------------------------------------------------------------------------------------------------
  //------------------------------------Text channel Gateway------------------------------------------------------------
  //--------------------------------------------------------------------------------------------------------------------

  @SubscribeMessage('msgToServer')
  async handleMessage(client: Socket, message: { jwt: string, officeID: number, sender: string, room: string, message: string }) {
    this.wss.to(message.room).emit('msgToClient', message);
    await this.messageService.saveNewMessage(message.jwt, message.officeID, message.room, message.sender, message.message);
  }

  @SubscribeMessage('joinRoomText')
  async handleRoomJoinText(client: Socket, data: {jwt: string, room: string} ) {
    client.join(data.room);
    this.logger.log(client.id + ' joined the ' + data.room + '.')
    const messageList = await this.messageService.getTextChannelMessages(data.jwt, data.room, 0);
    client.emit('joinedRoomText', {
      Room: data.room,
      MessageList: messageList.MessageList
    });
  }

  @SubscribeMessage('leaveRoomText')
  handleRoomLeaveText(client: Socket, room: string ) {
    client.leave(room);
    this.logger.log(client.id + ' left the ' + room + '.')
    client.emit('leftRoomText', room);
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

