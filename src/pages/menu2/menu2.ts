import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**import { ContactPage } from '../contact/contact';*/
import { ListPage } from '../list/list';
import { SuitePage } from '../suite/suite';


@IonicPage()
@Component({
  selector: 'page-menu2',
  templateUrl: 'menu2.html',
})
export class Menu2Page {

  c: string = "primary";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Menu2Page');
  }
  /**
   gotoContact(){
        this.navCtrl.push(ContactPage);
  }*/

  gotoQuizz(){
        this.navCtrl.push(ListPage);
  }
  gotoSimulation(){
        this.navCtrl.push(SuitePage);
  }
  
    audio: any = new Audio('assets/audio/accueil.m4a');
  play(){
       
        this.audio.play();
  }
  
  stop(){
        this.audio.pause();
  }
  
  begin(){
        this.audio.currentTime = 0;
  }

}
