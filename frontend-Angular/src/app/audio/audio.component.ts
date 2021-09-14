import { Component, Input, Self } from '@angular/core';
import { AngularAgoraRtcService, Stream } from 'angular-agora-rtc';
import { OfficeRoomService } from 'src/app/services/office-room.service';
import { Observable } from 'rxjs';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';

interface Room{
  id: number,
  officeID: number,
  roomName: string,
  xCoordinate: number,
  yCoordinate: number,
  width: number,
  height: number,
  roomType: string
};

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  //templateUrl: '../pages/user/user.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent {

  @Input() userId: number;

  title = 'AgoraDemo';
  localStream: Stream;
  remoteCalls: any = [];
  remoteStreams: Stream[] = [];
  remoteMediaStreams = [];
  audioContext = new AudioContext();
  jwt = sessionStorage.getItem('jwt');
  UserID : number;
  rooms: any;
  token: any;
  currentRoom: string = "NO-ROOM-SELECTED";
  currentRoomDetails: Room;
  currentRoomCenter = [];
  channelName = "OFFICE";

  constructor(
    private agoraService: AngularAgoraRtcService,
    private officeRoomService: OfficeRoomService
  ) {
    this.agoraService.createClient('rtc');
  }

  join(userID:string, officeID:number, room:string, officeName:string): void{
    this.officeRoomService.getOfficeRoomList(this.jwt, officeID).subscribe((res) => {
      console.log("------ ROOMS ------");
      console.log(res.Rooms);
      this.rooms = res.Rooms;
      console.log("Entered room");

      var temp: Room;
      this.rooms.forEach(roomName => {
        if(roomName.roomName == room){
          temp = roomName;
        }
      });
      if(temp.roomType == "Normal"){
        this.channelName = officeName;
      }else{
        this.channelName = officeName+temp.roomName;
      }

      this.officeRoomService.fetchToken(Number(userID), this.channelName, 1).subscribe((res) => {
        this.token = res.token;
        console.log("-------- JOIN AGORA WITH DETAILS --------");
        console.log("TOKEN:");
        console.log(this.token);
        console.log("CHANNEL:");
        console.log(this.channelName);
        console.log("UID:");
        console.log(userID);
        this.agoraService.client.join(this.token, this.channelName, userID);
        this.localStream = this.agoraService.createStream(userID, true, null, null, false, false);
        setTimeout(() => {this.assignRemoteHandlers(Number(userID))},1000);
        setTimeout(() => {this.publish(room)},3000);
      }, 
      errr => { 
        console.log(errr); 
      });
    });
  }

  publish(roomName: string): void{
    console.log("-------------- PUBLISH --------------");
    this.currentRoom = roomName;
    var tempRooms = this.rooms;
    this.assignLocalHandlers();

    this.localStream.init(() => {
      console.log("getUserMedia successfully");
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
    
    // ---------------------------------------------------
    // NEEDS TO BE RUN AFTER PUBLISH IS COMPLETE
    tempRooms.forEach((room) => {
      if(room.roomName == this.currentRoom){
        this.currentRoomDetails = room;
      }
    });
    this.currentRoomCenter = [((this.currentRoomDetails.width/2)+this.currentRoomDetails.xCoordinate), ((this.currentRoomDetails.height/2)+this.currentRoomDetails.yCoordinate)];    
    this.mixAudio(tempRooms);
    // ---------------------------------------------------
    
  }

  assignLocalHandlers(): void{
    this.localStream.on("accessAllowed", () => {
      console.log("accessAllowed");
    });
    // The user has denied access to the camera and mic.
    this.localStream.on("accessDenied", () => {
      console.log("accessDenied");
    });
  }

  assignRemoteHandlers(userID: number): void{
    this.agoraService.client.on('error', (err) => {
      console.log("Got error msg:", err.reason);
      if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
        this.agoraService.client.renewChannelKey(() => {
          // ---- RENEW CHANNEL KEY FUNCTION ----
          // 1) Get details
          var token: string = "";

          // 2) Make request
          this.officeRoomService.fetchToken(userID, this.channelName, 1).subscribe((res) => {
            token = res.token;
          });
          
          // 3) Return new token
          this.token = token;
          return token;
        }, () => {
          console.log("Renew channel key successfully");
        }, (err) => {
          console.log("Renew channel key failed: ", err);
        });
      }
    });

    this.agoraService.client.on('stream-added', (evt) => {
      const stream = evt.stream;
      this.agoraService.client.subscribe(stream, (err) => {
        console.log("Subscribe stream failed", err);
      });
    });

    this.agoraService.client.on('stream-subscribed', async (evt) => {
      const stream = evt.stream as Stream;
      const tmp = stream as any;
      const mediaStream = tmp.stream as MediaStream;
      var tempRooms = this.rooms;
      this.officeRoomService.getUserRoomByID(this.jwt, stream.params.streamID).subscribe((response) => {
        if (!this.remoteCalls.includes(`agora_remote${stream.getId()}`)){
          this.remoteCalls.push(`agora_remote${stream.getId()}`);
        }
        console.log("--------- MEDIA STREAM ---------");
        console.log(mediaStream);
        console.log("---------- USER ROOM ------------");
        console.log(stream.params.streamID);
        console.log(response);
        this.remoteStreams.push(stream);
        this.remoteMediaStreams.push([mediaStream, false, response.RoomID]);
        if(this.currentRoom != "NO-ROOM-SELECTED"){
          this.mixAudio(tempRooms);
          console.log(`Remote stream is subscribed ${stream.getId()}`);
        }
      });
    });

    this.agoraService.client.on('stream-removed', (evt) => {
      const stream = evt.stream;
      this.remoteCalls = this.remoteCalls.filter(call => call !== `#agora_remote${stream.getId()}`);
      console.log(`Remote stream is removed ${stream.getId()}`);
    });

    this.agoraService.client.on('peer-leave', (evt) => {
      const stream = evt.stream;
      if (stream) {
        this.remoteCalls = this.remoteCalls.filter(call => call === `#agora_remote${stream.getId()}`);
        console.log(`${evt.uid} left from this channel`);
      }
    });
  }

  unpublish(): void{
    this.agoraService.client.unpublish(this.localStream);
    console.log("Stream unpublished");
  }

  justLeave(): void{
    this.agoraService.client.leave(() => {
      console.log("Leavel channel successfully");
    }, (err) => {
      console.log("Leave channel failed");
    });
  }

  leave(): void {
    this.agoraService.client.unpublish(this.localStream);
    console.log("Stream unpublished");
    this.agoraService.client.leave(() => {
      console.log("Leavel channel successfully");
    }, (err) => {
      console.log("Leave channel failed");
    });
  }

  // -------------- HANDLE REMOTE STREAMS AND OUTPUT AUDIO --------------
  mixAudio(rooms): void {
    // Remote stream audio settings
    let volume = 1; 
    let pannerX = 0;
    let pannerZ = 0;
    console.log("------------------------ MIX AUDIO ------------------------");
    console.log("REMOTE STREAMS: ");
    console.log(this.remoteMediaStreams);

    // --------- Loop through remote audio streams ----------
    this.remoteMediaStreams.forEach( (stream) => {
      if(!stream[1]){
        if(this.currentRoom != stream[2]){
          // --------------- Get Rooms details ----------------
          var remoteRoomDetails: Room;
          rooms.forEach((room) => {
            if(room.id == stream[2]){
              remoteRoomDetails = room;
            }
          });
          console.log(remoteRoomDetails);
          // --------------------------------------------------
          // --------------- Calculate Centers ----------------
          var remoteRoomCenter = [((remoteRoomDetails.width/2)+remoteRoomDetails.xCoordinate), ((remoteRoomDetails.height/2)+remoteRoomDetails.yCoordinate)];
          // --------------------------------------------------
          // -------------- Calculate Panning ---------------
          // Orientation of listener: Facing toward the top floorplan
          var standardDistx = Number(remoteRoomCenter[0]) - Number(this.currentRoomCenter[0]);
          var standardDistz = Number(remoteRoomCenter[1]) - Number(this.currentRoomCenter[1]);

          const distConst = 10;

          pannerX = standardDistx * distConst;
          pannerZ = standardDistz * distConst;
          // --------------------------------------------------
        }
        // ---------- Work Around for Chrome Bugs -----------
        var audioStreamTrack = stream[0];
        let a = new Audio();
        a.muted = true;
        a.srcObject = audioStreamTrack;
        a.addEventListener('canplaythrough', () => {
          a = null;
        });
        // --------------------------------------------------
        // ------- Play Audio Stream in audioContext --------
        // Create AudioNodes in AudioContext
        let audioStream = this.audioContext.createMediaStreamSource(audioStreamTrack);
        let volumeControl = this.audioContext.createGain();
        let panner = this.audioContext.createPanner();

        // Connect AudioNodes in Sequence (RemoteMediaStream -> VolumeController -> Panner -> Compressor -> Destination(Output))
        audioStream.connect(volumeControl);
        volumeControl.connect(panner);
        panner.connect(this.audioContext.destination);

        // Configure AudioNodes
        volumeControl.gain.setValueAtTime( volume, this.audioContext.currentTime );
        panner.positionX.setValueAtTime( pannerX, this.audioContext.currentTime );
        panner.positionZ.setValueAtTime( pannerZ, this.audioContext.currentTime );
        // --------------------------------------------------
        stream[1] = true;
      }
    });
    // ------------------------------------------------------
  }
  // --------------------------------------------------------------------
}
