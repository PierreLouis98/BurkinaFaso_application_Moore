import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultat',
  templateUrl: 'resultat.html',
})
export class ResultatPage {
   c: string = "violette";
   audio: any = new Audio('assets/audio/calcul.mp3');
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  play(){ this.audio.play(); }
  stop(){ this.audio.pause(); }
  begin(){ this.audio.currentTime = 0; }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultatPage');
  }

}
