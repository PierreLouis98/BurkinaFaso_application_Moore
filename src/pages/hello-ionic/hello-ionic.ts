import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { Menu2Page } from '../menu2/menu2';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})


export class HelloIonicPage {

 
  audio: any = new Audio('assets/audio/Francais/debut.m4a');
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public nav: Nav) {
  }
  
  

    
  gotoMenu2(){  this.nav.setRoot(Menu2Page);  }
  
  play()
  { 
    this.audio.play(); 
  }
  stop(){ this.audio.pause(); }
  begin(){  this.audio.currentTime = 0; }
  
}