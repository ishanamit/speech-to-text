import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
import { ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
// import { AudioFileService } from "../../shared/_services/audio-file.service";
// import { NotificationService } from '../../shared/utils/notification.service';
// import { ConfigService } from '../../shared/utils/config.service';
import { Router } from "@angular/router";
import { Http,Response,Headers,RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs";
import {IWindow} from './../webkit.component';
declare var $:any;
declare var recorderObject: any;

@Component({
  selector: 'app-audio-files',
  templateUrl: './audio-files.component.html',
  styleUrls: ['./audio-files.component.css']
})
export class AudioFilesComponent {
  breadcrum: string;
  dashboardIcon: string;
  audioIcon: string;
  vartext: string;
 

  constructor(
    private appcomponent: AppComponent
          ) { }
          startRecognition()
          {
            var final_transcript='';
          const {webkitSpeechRecognition} : IWindow = <IWindow>window;
          const recognition = new webkitSpeechRecognition();
          recognition.continuous = false;
          recognition.interimResults = true;
          recognition.lang = "en-GB";
          recognition.start();
          recognition.onstart=function(event){
            console.log("Hi");
          recognition.onresult = function(event) {
              var interim_transcript = '';
              
              for (var i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                  final_transcript += event.results[i][0].transcript;
                } else {
                  interim_transcript += event.results[i][0].transcript;
                }
              }
              
              console.log(interim_transcript,final_transcript);
            };
          }
          
        }
      }
        
        
                  