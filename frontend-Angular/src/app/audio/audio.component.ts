import { Component, OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AudioService } from '../services/audio.service';
import { UserService } from 'src/app/services/user.service';
import { AgoraClient, ClientEvent, NgxAgoraService, Stream, StreamEvent } from 'ngx-agora';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})

export class AudioComponent implements OnInit {
  title = 'audio-suite';
  localCallId = 'agora_local';
  remoteCalls: string[] = [];

  private client: AgoraClient;
  private localStream: Stream;
  private uid: number;
  
  constructor(private ngxAgoraService: NgxAgoraService) {
    this.uid = Math.floor(Math.random() * 10000);
  }

  ngOnInit() {
    this.client = this.ngxAgoraService.createClient({ mode: 'rtc', codec: 'vp8' });
    this.assignClientHandlers();
  
    this.localStream = this.ngxAgoraService.createStream({ streamID: this.uid, audio: true, video: false });
    this.assignLocalStreamHandlers();
    // Join and publish methods added in this step
    this.initLocalStream(() => this.join(uid => this.publish(), error => console.error(error)));
  }
    
  join(onSuccess?: (uid: number | string) => void, onFailure?: (error: Error) => void): void {
    this.client.join('0067afb53157f754f6f8023f31fb343404aIAB/DZs+sbjmEuzqwX+wu61CndpqrBrbYhUOtRFh/fJJkS/kRDEAAAAAEADVf7iLd/8UYQEAAQB2/xRh', 'audio-suite', this.uid, onSuccess, onFailure);
  }
  
  publish(): void {
    this.client.publish(this.localStream, err => console.log('Publish local stream error: ' + err));
  }

private assignLocalStreamHandlers(): void {
    this.localStream.on(StreamEvent.MediaAccessAllowed, () => {
      console.log('accessAllowed');
    });

    // The user has denied access to the camera and mic.
    this.localStream.on(StreamEvent.MediaAccessDenied, () => {
      console.log('accessDenied');
    });
  }

private initLocalStream(onSuccess?: () => any): void {
  this.localStream.init(
    () => {
       // The user has granted access to the camera and mic.
       this.localStream.play(this.localCallId);
       if (onSuccess) {
         onSuccess();
       }
    },
    err => console.error('getUserMedia failed', err)
  );
}

  private assignClientHandlers(): void {
    this.client.on(ClientEvent.LocalStreamPublished, evt => {
      console.log("------------ LOCAL STREAM PUBLISHED ------------\n"+evt.stream);
      console.log('Publish local stream successfully');
    });

    this.client.on(ClientEvent.Error, error => {
      console.log('Got error msg:', error.reason);
      if (error.reason === 'DYNAMIC_KEY_TIMEOUT') {
        this.client.renewChannelKey(
          '',
          () => console.log('Renewed the channel key successfully.'),
          renewError => console.error('Renew channel key failed: ', renewError)
        );
      }
    });

    this.client.on(ClientEvent.RemoteStreamAdded, evt => {
      console.log("------------ REMOTE STREAM ADDED ------------\n"+evt.stream);
      const stream = evt.stream as Stream;
      this.client.subscribe(stream, { audio: true, video: false }, err => {
        console.log('Subscribe stream failed', err);
      });
    });

    this.client.on(ClientEvent.RemoteStreamSubscribed, evt => {
      console.log("------------ REMOTE STREAM SUBSCRIBED ------------\n"+evt.stream);
      const stream = evt.stream as Stream;
      const id = this.getRemoteId(stream);
      this.remoteCalls.push(id);
      console.log("REMOTE CALLS: "+ this.remoteCalls);
      setTimeout(() => stream.play(id), 1000);
    });

    this.client.on(ClientEvent.RemoteStreamRemoved, evt => {
      console.log("------------ REMOTE STREAM REMOVED ------------\n"+evt.stream);
      const stream = evt.stream as Stream;
      if (stream) {
        stream.stop();
        this.remoteCalls = [];
        console.log("REMOTE CALLS: "+ this.remoteCalls);
        console.log(`Remote stream is removed ${stream.getId()}`);
      }
    });

    this.client.on(ClientEvent.PeerLeave, evt => {
      console.log("------------ PEER LEAVE ------------\n"+evt.stream);
      const stream = evt.stream as Stream;
      if (stream) {
        stream.stop();
        this.remoteCalls = this.remoteCalls.filter(call => call !== `${this.getRemoteId(stream)}`);
        console.log(`${evt.uid} left from this channel`);
      }
    });
  }

  private getRemoteId(stream: Stream): string {
    return `agora_remote-${stream.getId()}`;
  }
}
