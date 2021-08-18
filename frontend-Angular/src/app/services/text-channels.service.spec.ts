import { TestBed, inject } from '@angular/core/testing';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

import { TextChannelsService } from './text-channels.service';

const config: SocketIoConfig = { url: 'http://localhost:3001/serverSocket' };

describe('TextChannelsService', () => {
  let textChannelService: TextChannelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ SocketIoModule.forRoot(config) ],
      providers: [ TextChannelsService ]
    });
    textChannelService = TestBed.inject(TextChannelsService);
  });

  it('should initialise socket connection', () => {
    expect(textChannelService).toBeTruthy();
  });

  // it('should join a room', async () => {
  //   const expectedResponse = {
  //     Room: 'Test_Channel',
  //     MessageList: []
  //   }

  //   textChannelService.listen('joinedRoomText').subscribe((response) => {
  //     console.log(response);
  //     expect(response).toBe(expectedResponse, 'should compare expected response to actual response')
  //   })

  //   const jwt = 'ghuidsgheujsghs8943shdgdsjg';
  //   const officeID = 1;
  //   const office = 'Test_Office';
  //   const channel = 'Test_Channel';
  //   const isRoom = false;
  //   textChannelService.joinRoom(jwt, officeID, office, channel, isRoom);
  // })
});
