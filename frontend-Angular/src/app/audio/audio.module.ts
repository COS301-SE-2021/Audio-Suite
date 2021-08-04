import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxAgoraModule } from 'ngx-agora';
import { AppRoutingModule } from '../app-routing.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    //NgxAgoraModule.forRoot({ AppID: '023766436b244044ab85f65470dcbae2' })
    NgxAgoraModule.forRoot({ AppID: environment.agora.appId })
  ]
})
export class AudioModule { }
