import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'

import { AudioComponent } from './audio.component';
import { AngularAgoraRtcModule, AgoraConfig } from 'angular-agora-rtc';

const agoraConfig: AgoraConfig = {
  AppID: '7afb53157f754f6f8023f31fb343404a',
};

@NgModule({
  declarations: [
    AudioComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AngularAgoraRtcModule.forRoot(agoraConfig)
  ]
})
export class AudioModule { }
