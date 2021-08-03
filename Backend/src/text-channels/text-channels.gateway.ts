import { OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({namespace: '/chat'})
export class TextChannelsGateway implements OnGatewayInit{

  private logger: Logger = new Logger('ChatGateway');
  
  @WebSocketServer() wss: Server;

  afterInit(server: any) {
    this.logger.log('Initialised!')
  }
  
  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, message: { sender: string, room: string, message: string }) {
    this.wss.to(message.room).emit('msgToClient', message);
    //TODO add message to database
  }

  @SubscribeMessage('joinRoom')
  handleRoomJoin(client: Socket, room: string ) {
    client.join(room);
    client.emit('joinedRoom', room);
  }

  @SubscribeMessage('leaveRoom')
  handleRoomLeave(client: Socket, room: string ) {
    client.leave(room);
    client.emit('leftRoom', room);
  }
}
