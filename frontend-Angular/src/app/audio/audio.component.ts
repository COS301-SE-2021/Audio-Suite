import { Component, OnInit } from '@angular/core';
import { AngularAgoraRtcService } from 'angular-agora-rtc';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {

  // Memeber variables
  appId: string;
  token: string;
  channel: string;
  apiURL: string;

  constructor(private agoraService: AngularAgoraRtcService) {

    this.agoraService.createClient('rtc');
    this.appId = "7afb53157f754f6f8023f31fb343404a";
    this.token = "0067afb53157f754f6f8023f31fb343404aIAD9uSBZhOyt1t2aIQgrPedJ52xQ+FtPLnFqtHXQLUDNDKHYMoUAAAAAEAC2CAMvMnQKYQEAAQAxdAph";
    this.channel = "TestChannel";
    this.apiURL = "http://127.0.0.1:3001";
  
    alert("I'm going to join....good luck!");
    this.agoraService.client.join("7afb53157f754f6f8023f31fb343404a", "TestChannel", "0067afb53157f754f6f8023f31fb343404aIAD9uSBZhOyt1t2aIQgrPedJ52xQ+FtPLnFqtHXQLUDNDKHYMoUAAAAAEAC2CAMvMnQKYQEAAQAxdAph", null);

  }

  ngOnInit(): void {
    
  }

}
