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

  it('should be created', () => {
    expect(textChannelService).toBeTruthy();
  });
});
