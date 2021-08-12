import { Component, OnInit, Input } from '@angular/core';
import { AngularAgoraRtcService, Stream } from 'angular-agora-rtc';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  //templateUrl: '../pages/user/user.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent {

  @Input() userId: number;

  title = 'AgoraDemo';
  localStream: Stream // Add
  remoteCalls: any = []; // Add
  remoteStreams: Stream[] = [];
  remoteMediaStreams = [];
  audioContext = new AudioContext();
  UserID:number;

  // Add
  constructor(
    private agoraService: AngularAgoraRtcService,
    private userService: UserService
  ) {
    this.agoraService.createClient('rtc');
    console.log("Does it even get here?");
  }

  // Add
  async startCall() {
    console.log(this.userId);
    // this.UserID=this.getUserDetails();
    // console.log(this.UserID);
    console.log("Called startCall()");
    await this.agoraService.client.join(null, '1000', this.userId);
    this.localStream = this.agoraService.createStream(this.userId, true, null, null, false, false);
    //setTimeout(() => this.subscribeToStreams(), 2000);
    this.subscribeToStreams();
  }

  leave() {
    this.agoraService.client.leave(() => {
      console.log("Leavel channel successfully");
    }, (err) => {
      console.log("Leave channel failed");
    });
  }

  // -------------- HANDLE REMOTE STREAMS AND OUTPUT AUDIO --------------
  mixAudio(): void {
    // Remote stream audio settings
    let volume = 25; 
    let pannerX = 0;
    let pannerY = 0;
    let pannerZ = 0;
    console.log("------------------------ MIX AUDIO ------------------------");
    console.log("REMOTE STREAMS: ");
    console.log(this.remoteMediaStreams);
    // --------- Loop through remote audio streams ----------
    this.remoteMediaStreams.forEach( (stream) => {
      // ---------- Work Around for Chrome Bugs -----------
      var audioStreamTrack = stream;
      let a = new Audio();
      a.muted = true;
      a.srcObject = audioStreamTrack;
      a.addEventListener('canplaythrough', () => {
        a = null;
      });
      // --------------------------------------------------
      console.log("STREAM LOOP: "+stream);
      // ------- Play Audio Stream in audioContext --------
      // Create AudioNodes in AudioContext
      let audioStream = this.audioContext.createMediaStreamSource(audioStreamTrack);
      let volumeControl = this.audioContext.createGain();
      let panner = this.audioContext.createPanner();
      let compressor = this.audioContext.createDynamicsCompressor();

      // Connect AudioNodes in Sequence (RemoteMediaStream -> VolumeController -> Panner -> Compressor -> Destination(Output))
      audioStream.connect(volumeControl);
      volumeControl.connect(panner);
      panner.connect(compressor);
      compressor.connect(this.audioContext.destination);

      // Configure AudioNodes
      volumeControl.gain.setValueAtTime( volume, this.audioContext.currentTime );
      panner.positionX.setValueAtTime( pannerX, this.audioContext.currentTime );
      panner.positionY.setValueAtTime( pannerY, this.audioContext.currentTime );
      panner.positionZ.setValueAtTime( pannerZ, this.audioContext.currentTime );
      // --------------------------------------------------
    });
    // ------------------------------------------------------
  }
  // --------------------------------------------------------------------

  // Add
  private subscribeToStreams() {
    this.localStream.on("accessAllowed", () => {
      console.log("accessAllowed");
    });
    // The user has denied access to the camera and mic.
    this.localStream.on("accessDenied", () => {
      console.log("accessDenied");
    });

    this.localStream.init(() => {
      console.log("getUserMedia successfully");
      console.log(this.localStream.play('agora_local'));
      this.localStream.play('agora_local');
      this.agoraService.client.publish(this.localStream, function (err) {
        console.log("Publish local stream error: " + err);
      });
      this.agoraService.client.on('stream-published', function (evt) {
        console.log("Publish local stream successfully");
      });
    }, function (err) {
      console.log("getUserMedia failed", err);
    });

     // Add
     this.agoraService.client.on('error', (err) => {
      console.log("Got error msg:", err.reason);
      if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
        this.agoraService.client.renewChannelKey("", () => {
          console.log("Renew channel key successfully");
        }, (err) => {
          console.log("Renew channel key failed: ", err);
        });
      }
    });

    // Add
    this.agoraService.client.on('stream-added', (evt) => {
      const stream = evt.stream;
      this.agoraService.client.subscribe(stream, (err) => {
        console.log("Subscribe stream failed", err);
      });
    });

    // Add
    this.agoraService.client.on('stream-subscribed', (evt) => {
      const stream = evt.stream as Stream;
      const tmp = stream as any;
      const mediaStream = tmp.stream as MediaStream;

      if (!this.remoteCalls.includes(`agora_remote${stream.getId()}`)){
        this.remoteCalls.push(`agora_remote${stream.getId()}`);
      }

      console.log("--------- MEDIA STREAM ---------");
      console.log(mediaStream);
      this.remoteStreams.push(stream);
      this.remoteMediaStreams.push(mediaStream);
      this.mixAudio();
      console.log(`Remote stream is subscribed ${stream.getId()}`);
      //setTimeout(() => stream.play(`agora_remote${stream.getId()}`), 2000);
    });

    // Add
    this.agoraService.client.on('stream-removed', (evt) => {
      const stream = evt.stream;
      //stream.stop();
      this.remoteCalls = this.remoteCalls.filter(call => call !== `#agora_remote${stream.getId()}`);
      console.log(`Remote stream is removed ${stream.getId()}`);
    });

    // Add
    this.agoraService.client.on('peer-leave', (evt) => {
      const stream = evt.stream;
      if (stream) {
        //stream.stop();
        this.remoteCalls = this.remoteCalls.filter(call => call === `#agora_remote${stream.getId()}`);
        console.log(`${evt.uid} left from this channel`);
      }
    });
  }

  getUserDetails(): number{
    console.log("hereeeeeeee");
    var userID:number;
    var jwt = sessionStorage.getItem('jwt');
    this.userService.getUserDetails(jwt).subscribe((response) => {
      userID = response.id;
      console.log(userID);
    },
    (error) => {
      console.log(error);
    })
    console.log("second");
    console.log(userID);
    return userID;
  }
}
