import { Component, Input, Self } from '@angular/core';
import { AngularAgoraRtcService, Stream } from 'angular-agora-rtc';
import { OfficeRoomService } from 'src/app/services/office-room.service';
import { Observable } from 'rxjs';

interface Room{
  id: number,
  officeID: number,
  roomName: string,
  xCoordinate: number,
  yCoordinate: number,
  width: number,
  height: number
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
  currentRoom: string = "NO-ROOM-SELECTED";
  currentRoomDetails: Room;
  currentRoomCenter = [];

  constructor(
    private agoraService: AngularAgoraRtcService,
    private officeRoomService: OfficeRoomService
  ) {
    this.agoraService.createClient('rtc');
  }

  join(userID:string, officeID:number): void{
    this.officeRoomService.getOfficeRoomList(this.jwt, officeID).subscribe((res) => {
      console.log("------ ROOMS ------");
      console.log(res.Rooms);
      this.rooms = res.Rooms;
      console.log("Entered room");
      this.agoraService.client.join(null, '1000', userID);
      this.localStream = this.agoraService.createStream(userID, true, null, null, false, false);
      this.assignRemoteHandlers();
    });
  }

  publish(room: string): void{
    this.currentRoom = room;
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
    console.log(tempRooms);
    tempRooms.forEach((room) => {
      if(room.roomName === this.currentRoom){
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

  assignRemoteHandlers(): void{
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
            if(room.id === stream[2]){
              remoteRoomDetails = room;
            }
          });
          console.log(remoteRoomDetails);
          // --------------------------------------------------
          // --------------- Calculate Centers ----------------
          var remoteRoomCenter = [((remoteRoomDetails.width/2)+remoteRoomDetails.xCoordinate), ((remoteRoomDetails.height/2)+remoteRoomDetails.yCoordinate)];
          console.log("remoteRoomDetails 5: ");
          console.log(remoteRoomDetails.width);
          console.log("remoteRoomDetails 3: ");
          console.log(remoteRoomDetails.xCoordinate);
          console.log("remoteRoomDetails 6: ");
          console.log(remoteRoomDetails.height);
          console.log("remoteRoomDetails 4: ");
          console.log(remoteRoomDetails.yCoordinate);
          // --------------------------------------------------
          // --------------- Calculate Distance ---------------
          var euclideanDistance = Math.sqrt(Math.pow((remoteRoomCenter[0]-this.currentRoomCenter[0]),2)+Math.pow((remoteRoomCenter[1]-this.currentRoomCenter[1]),2));
          const distConst = 10;
          // --------------------------------------------------
          // -------------- Calculate Direction ---------------
          //var xDiff = remoteRoomCenter[0] - this.currentRoomCenter[0];
          //var yDiff = remoteRoomCenter[1] - this.currentRoomCenter[1];
          
          var standardDistx = Number(remoteRoomCenter[0]) - Number(this.currentRoomCenter[0]);
          var standardDistz = Number(remoteRoomCenter[1]) - Number(this.currentRoomCenter[1]);

          console.log("RemoteRoomCenter X: ");
          console.log(remoteRoomCenter[0]);
          console.log("RemoteRoomCenter Z: ");
          console.log(remoteRoomCenter[1]);

          console.log("CurrentRoomCenter X: ");
          console.log(this.currentRoomCenter[0]);
          console.log("CurrentRoomCenter Z: ");
          console.log(this.currentRoomCenter[1]);

          console.log("StandardDist X: ");
          console.log(standardDistx);
          console.log("StandardDist Z: ");
          console.log(standardDistz);

          pannerX = standardDistx * distConst;
          pannerZ = standardDistz * distConst;

          console.log("PANNER X: ");
          console.log(pannerX);
          console.log("PANNER Z: ");
          console.log(pannerZ);
          // Orientation of listener: Facing toward the top floorplan
          //var standardDist = 10 * euclideanDistance;
          /*if(xDiff < 0){
            if(yDiff < 0){
              // LEFT FORWARD
              pannerX = -standardDist;
              pannerZ = standardDist;
            }else if(yDiff > 0){
              // LEFT BACK
              pannerX = -standardDist;
              pannerZ = -standardDist;
            }else{
              // LEFT
              pannerX = -standardDist;
              pannerZ = 0;
            }
          }else if(xDiff > 0){
            if(yDiff < 0){
              // RIGHT FORWARD
              pannerX = standardDist;
              pannerZ = standardDist;
            }else if(yDiff > 0){
              // RIGHT BACK
              pannerX = standardDist;
              pannerZ = -standardDist;
            }else{
              // RIGHT
              pannerX = standardDist;
              pannerZ = 0;
            }
          }else{
            if(yDiff < 0){
              // FORWARD
              pannerX = 0;
              pannerZ = standardDist;
            }else if(yDiff > 0){
              // BACK
              pannerX = 0;
              pannerZ = -standardDist;
            }
          }*/
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
        let compressor = this.audioContext.createDynamicsCompressor();

        // Connect AudioNodes in Sequence (RemoteMediaStream -> VolumeController -> Panner -> Compressor -> Destination(Output))
        audioStream.connect(volumeControl);
        volumeControl.connect(panner);
        panner.connect(compressor);
        compressor.connect(this.audioContext.destination);

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
