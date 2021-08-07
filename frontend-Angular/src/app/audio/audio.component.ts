import { Component, OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import {AudioService} from '../services/audio.service';
import { UserService } from 'src/app/services/user.service';
import { AgoraClient, ClientEvent, NgxAgoraService, Stream, StreamEvent } from 'ngx-agora';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})

export class AudioComponent implements OnInit {
  
  // -------------- VARIABLES --------------
  private localStream: Stream;
  private client: AgoraClient;
  appId: FormControl = new FormControl((environment as any).agora ? (environment as any).agora.appId : '');
  channel = new FormControl('AUDIO_SUITE');
  uid: number;
  remoteCalls: string[] = [];
  remoteStreams: Stream[] = [];
  remoteUsers: number[] = [];
  remoteUsernames: string[] = [];
  audioContext = new AudioContext();
  connected = false;
  published = false;
  user_jwt=sessionStorage.getItem('jwt');
  username = '';
  userID : number;
  // ---------------------------------------
  
  // -------------- CONSTRUCTOR --------------
  constructor(private agoraService: NgxAgoraService, private userService: UserService, private audioService: AudioService, private element: ElementRef, 
    private ref:ChangeDetectorRef) {
      this.setUserDetails();
      this.client = this.agoraService.createClient({ mode: 'rtc', codec: 'vp8' });
      this.assignClientHandlers();
  }
  // -----------------------------------------
  
  // -------------- ANGULAR INIT --------------
  ngOnInit() {
    this.client.init(this.appId.value, () => console.log('Initialized successfully'), () => console.log('Could not initialize'));
    this.ref.detectChanges();
  }
  // ------------------------------------------

  // -------------- JOIN AGORA CHANNEL --------------
  join(): void {
    this.localStream = this.agoraService.createStream({ audio: true, video: false });
    this.assignLocalStreamHandlers();
    this.init();
    this.client.join(null, this.channel.value, this.uid);
  }
  // ------------------------------------------------

  // -------------- PUBLISH LOCAL STREAM --------------
  publish(): void {
    this.client.publish(this.localStream, err => console.log('Publish local stream error: ' + err));
  }
  // --------------------------------------------------

  // -------------- UNPUBLISH LOCAL STREAM --------------
  unpublish(): void {
    this.client.unpublish(this.localStream, error => console.error(error));
    this.published = false;
  }
  // ----------------------------------------------------
  
  // -------------- LEAVE AGORA CHANNEL --------------
  leave(): void {
    if (this.connected) {
      this.client.leave( () => {
        console.log('Left the channel successfully');
        this.connected = false;
        this.published = false;
        this.remoteCalls = [];
      }, err => {
        console.log('Leave channel failed');
      });
    } else {
      this.agoraService.AgoraRTC.Logger.warning('Local client is not connected to channel.');
    }
  }
  // -------------------------------------------------
    
// -------------- HANDLE REMOTE STREAMS AND OUTPUT AUDIO --------------
mixAudio(): void{
  // --------- Loop through remote audio streams ----------
  let volume = 15; // Set Volume
  
  this.remoteStreams.forEach( (stream) => {
    var track = stream.getAudioTrack();
    if (typeof track !== 'undefined'){
      // ---------- Work Around for Chrome Bugs -----------
      var audioStreamTrack = new MediaStream([track]);
      let a = new Audio();
      a.muted = true;
      a.srcObject = audioStreamTrack;
      a.addEventListener('canplaythrough', () => {
        a = null;
      });
      // --------------------------------------------------
      // ------- Play Audio Stream in audioContext --------
      let audioStream = this.audioContext.createMediaStreamSource(audioStreamTrack);
      let volumeControl = this.audioContext.createGain();
      let panner = this.audioContext.createPanner();
      let compressor = this.audioContext.createDynamicsCompressor();
      volumeControl.gain.setValueAtTime(volume, this.audioContext.currentTime);
      audioStream.connect(volumeControl);
      volumeControl.connect(panner);
      panner.connect(compressor);
      compressor.connect(this.audioContext.destination);
      panner.positionX.setValueAtTime( 0, this.audioContext.currentTime );
      panner.positionY.setValueAtTime( 0, this.audioContext.currentTime );
      panner.positionZ.setValueAtTime( 0, this.audioContext.currentTime );
      // --------------------------------------------------
    }
  });
  // ------------------------------------------------------
}
// --------------------------------------------------------------------

  protected init(): void {
    this.localStream.init(
      () => {
        // The user has granted access to the camera and mic.
        console.log('getUserMedia successfully');
        this.localStream.play('agora_local');
        this.connected = true;
      },
      err => console.log('getUserMedia failed', err)
    );
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

  private assignClientHandlers(): void {
    this.client.on(ClientEvent.LocalStreamPublished, evt => {
      this.published = true;
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
      const stream = evt.stream as Stream;
      this.client.subscribe(stream, { audio: true, video: false}, err => {
        console.log('Subscribe stream failed', err);
      });
      
      this.updateRemoteUser(stream.getId());
      //alert(stream.getId());
    });

    this.client.on(ClientEvent.RemoteStreamSubscribed, evt => {
      const stream = evt.stream as Stream;
      const id = this.getRemoteId(stream);
      if (!this.remoteCalls.length) {
        this.remoteCalls.push(id);
        this.remoteStreams.push(stream);
        this.mixAudio();
        console.log(`Remote stream is subscribed ${stream.getId()}`);
        console.log(this.setRemoteUserUsername(stream.getId()));
      }
    
    });

    this.client.on(ClientEvent.RemoteStreamRemoved, evt => {
      const stream = evt.stream as Stream;
      if (stream) {
        stream.stop();
        this.remoteCalls = [];
        console.log(`Remote stream is removed ${stream.getId()} username is ${stream.getId()}`);
        this.removeRemoteUser(stream.getId());
      }
    });

    this.client.on(ClientEvent.PeerLeave, evt => {
      const stream = evt.stream as Stream;
      if (stream) {
        stream.stop();
        this.remoteCalls = this.remoteCalls.filter(call => call !== `${this.getRemoteId(stream)}`);
        console.log(`${evt.uid} left from this channel`);
      }
    });
  }

  private getRemoteId(stream: Stream): string {
    //var userName = this.setRemoteUserUsername(stream.getId());
    return `agora_remote-${stream.getId()}`;
  }

  private setUserDetails(): void{
    this.userService.getUserDetails(this.user_jwt).subscribe(response => {
      console.log(response);
      if(response.id !== null){
        this.username = response.userName;
        this.uid = response.id;
        return
      }
    })
  }

  private updateRemoteUser(remoteID): void{
    //alert('nr1');
    if(!this.remoteUsers.includes(remoteID)){
      this.remoteUsers.push(remoteID);
      //console.log('nr2');
      //console.log(this.remoteUsers);
    }
    //this.remoteUsernames = [];
    this.remoteUsers.forEach(this.setRemoteUserUsername);
  }

  private removeRemoteUser(remoteID): void{
    if(this.remoteUsers.includes(remoteID)){
      const index = this.remoteUsers.indexOf(remoteID);
      if (index > -1) {
        this.remoteUsers.splice(index, 1);
      }
    }
    console.log(this.remoteUsers);
    //this.remoteUsernames = [];
    this.remoteUsers.forEach(this.setRemoteUserUsername)
  }

  private setRemoteUserUsername(remoteID): void{
    var userName = '';
    this.userService.getUsernameById(remoteID).subscribe(response => {
      console.log(response);
      //if(response.response == "Success"){
        userName = response.userName;
        if(!this.remoteUsernames.includes(userName)){
          this.remoteUsernames.push(userName);
        }
        //console.log(userName);
        return
      //}
    })
  }

}
