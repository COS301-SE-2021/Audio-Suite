import { OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Logger } from '@nestjs/common';


@WebSocketGateway({cors: true, namespace: 'serversocket'})
export class ServerSocketGateway implements OnGatewayInit{

  private logger: Logger = new Logger('ServerSocketGateway');
  
  @WebSocketServer() wss: Server;

  afterInit(server: any) {
    this.logger.log('Initialised!')
  }

  //--------------------------------------------------------------------------------------------------------------------
  //------------------------------------Text channel Gateway------------------------------------------------------------
  //--------------------------------------------------------------------------------------------------------------------

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, message: { sender: string, room: string, message: string }) {
    this.wss.to(message.room).emit('msgToClient', message);
    //TODO add message to database
  }

  @SubscribeMessage('joinRoomText')
  handleRoomJoinText(client: Socket, room: string ) {
    client.join(room);
    this.logger.log(client.id + ' joined the ' + room + '.')
    client.emit('joinedRoomText', room);
  }

  @SubscribeMessage('leaveRoomText')
  handleRoomLeaveText(client: Socket, room: string ) {
    client.leave(room);
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

