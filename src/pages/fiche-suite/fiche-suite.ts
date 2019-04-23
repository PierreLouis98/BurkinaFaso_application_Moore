import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-fiche-suite',
  templateUrl: 'fiche-suite.html',
})

export class FicheSuitePage
{
    etape: string;
    reponse: string[];
    index: string;
    question: string[];
    score: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
        this.etape = navParams.get('etape');
        this.reponse = navParams.get('reponse');
        this.index = navParams.get('index');
        this.question = navParams.get('question');
        this.score = navParams.get('score');
  }
 
  image()
  {
        return ("../../assets/imgs/et1/et" + this.index + ".JPG");
  };

  doSubmit(event) { event.preventDefault(); };

}


























