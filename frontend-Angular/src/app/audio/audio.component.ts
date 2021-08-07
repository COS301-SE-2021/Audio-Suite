import { Component, OnInit,  Renderer2, ElementRef, ChangeDetectorRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
//import { isType } from '@angular/core/src/type';
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
  private localStream: Stream;
  private client: AgoraClient;
  /**
   * App ID used when connecting to the Agora.io servers
   */
  appId: FormControl = new FormControl((environment as any).agora ? (environment as any).agora.appId : '');
  /**
   * Channel (meeting room) within the Agora app to join
   */
  channel = new FormControl('AUDIO_SUITE');
  /**
   * Generated user ID that is attached to the local client when joining a meeting room
   */
  uid: number;

  /**
   * All the IDs of other users that have joined the call
   */
  remoteCalls: string[] = [];
  remoteStreams: Stream[] = [];
  remoteUsers: number[] = [];
  remoteUsernames: string[] = [];
  //test: string[] = ['onw', 'two', 'five'];

  audioContext = new AudioContext();

  /**
   * Whether the local client has tuned in to the Agora meeting room
   */
  connected = false;
  /**
   * Whether the local client's A/V stream has been published to the remote meeting room
   */
  published = false;
  /**
   * The jwt of the current user
   */
   user_jwt=sessionStorage.getItem('jwt');
  /**
   * The username of the current user
   */
   username = '';
   /**
   * The userID of the current user
   */
    userID : number;


  constructor(private agoraService: NgxAgoraService, private userService: UserService, private audioService: AudioService, private element: ElementRef, 
    private renderer2: Renderer2, private ref:ChangeDetectorRef) {
    
    this.setUserDetails();
    //this.uid = Math.floor(Math.random() * 100);

    this.client = this.agoraService.createClient({ mode: 'rtc', codec: 'vp8' });
    this.assignClientHandlers();
  }

  // private unlistener: () => void;
 
  ngOnInit() {
    this.client.init(this.appId.value, () => console.log('Initialized successfully'), () => console.log('Could not initialize'));
    this.ref.detectChanges();
    // this.unlistener = this.renderer2.listen("document", "mousemove", event => {
    //   console.log(`I am detecting mousemove at ${event.pageX}, ${event.pageY} on Document!`);
    // });
  }

  // ngOnDestroy() {
  //   this.unlistener();
  // }

  join(): void {
    // this.client.on("user-published", handleUserPublished);
    // this.client.on("user-unpublished", handleUserUnpublished);

    this.localStream = this.agoraService.createStream({ streamID: this.uid, audio: true, video: false, screen: false });
    this.assignLocalStreamHandlers();
    this.init();

    this.client.join(null, this.channel.value, this.uid);
    
  }

  publish(): void {
    this.client.publish(this.localStream, err => console.log('Publish local stream error: ' + err));
  }

  unpublish(): void {
    this.client.unpublish(this.localStream, error => console.error(error));
    this.published = false;
  }

  leave(): void {
    if (this.connected) {
      this.client.leave(
        () => {
          console.log('Left the channel successfully');
          this.connected = false;
          this.published = false;
          this.remoteCalls = [];
        },
        err => {
          console.log('Leave channel failed');
        }
      );
    } else {
      this.agoraService.AgoraRTC.Logger.warning('Local client is not connected to channel.');
    }
  }

  mixAudio(): void{
    // --------- Loop through remote audio streams ----------
    let volume = 22; // Set Volume

    this.remoteStreams.forEach( (stream, i, arr) => {
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
        panner.positionY.setValueAtTime( 70, this.audioContext.currentTime );
        panner.positionZ.setValueAtTime( 0, this.audioContext.currentTime );
        //audioStream.connect(this.audioContext.destination);
        // --------------------------------------------------
      }
    });
    // ------------------------------------------------------
  }

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
        //setTimeout(() => this.remoteStreams.reverse()[0].play(id), 1000);
        console.log(`Remote stream is subscribed ${stream.getId()}`);
        console.log(this.setRemoteUserUsername(stream.getId()));
        
        this.removeRemoteUser(stream.getId());
      }
    
    });

    this.client.on(ClientEvent.RemoteStreamRemoved, evt => {
      const stream = evt.stream as Stream;
      if (stream) {
        stream.stop();
        //this.remoteCalls = [];
        console.log(`Remote stream is removed ${stream.getId()} username is ${stream.getId()}`);
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
    //console.log("here2");
    //var userName = this.setRemoteUserUsername(stream.getId());
    return `agora_remote-${stream.getId()}`;
    
  }

  private setUserDetails(): void{
    console.log("here");
    this.userService.getUserDetails(this.user_jwt).subscribe(response => {
      console.log(response);
      //if(response.response == "Success"){
        this.username = response.userName;
        this.uid = response.id;
        return
      //}
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
