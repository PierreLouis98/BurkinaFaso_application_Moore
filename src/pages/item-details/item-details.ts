import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { FicheSuitePage } from '../fiche-suite/fiche-suite';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})

export class ItemDetailsPage {
  selectedItem: any;
  actor: string[] = ['0','0','0','0','0','0','0','0','0','0','0','0'];
  
  c: string = "vert";
  audio: any[];
  b_question: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
    // we have an item available as a nav param
    

    
    this.selectedItem = navParams.get('item');
    this.audio = [];
    for (var i = 0; i < this.selectedItem.message.length; i++)
        this.audio.push(new Audio('assets/audio/Francais/' + this.selectedItem.message[i] + '.m4a')); 
            

    this.b_question = [];
    for(var k=0; k<this.selectedItem.question.length; k++)
    {
        this.b_question.push(this.selectedItem.question[k][0]);
        this.b_question.push(this.selectedItem.question[k][this.selectedItem.reponse[k]]);
    };



  }
  
  
  
showAlert(i) 
 {
     var rep: string[] = this.actor;
     var b_rep = this.selectedItem.reponse;
     var gagne: number = 0;
     var pt;
    
    for (var j = 0; j < b_rep.length; j++)
    {
        if ( rep[j] === b_rep[j] )
            gagne++;
    }
    pt = gagne + ' points';

        let alert = this.alerCtrl.create(
        {
          title: 'Score: ',
          subTitle: pt,
        buttons: [
        {
          text: 'Retour',
          handler: () => {
            console.log('Retour clicked');
          }
        },
        {
          text: 'Résultat',
          handler: () => 
          {
            console.log('Résultat clicked');
          }
        }
      ]
        });
        
        alert.present();
  } 
  
  
  gotoResultat(event, i)
  {
     var rep: string[] = this.actor;
     var b_rep = this.selectedItem.reponse;
     var gagne: number = 0;
     var pt;
    
    for (var j = 0; j < b_rep.length; j++)
    {
        if ( rep[j] === b_rep[j] )
            gagne++;
    }
    pt = gagne + ' points';

        this.navCtrl.push(FicheSuitePage, {etape: this.selectedItem.note, reponse: this.selectedItem.reponse, index: this.selectedItem.ind, question: this.b_question, score: pt}); 
  } 
  
  
  doSubmit(event) {  event.preventDefault();  }
  
  play(i)
  { 
    for(var j = 0; j < this.audio.length; j++)
    {
        if(this.audio[j].currentTime != 0 && j!=i)
        {
            this.audio[j].pause();
            this.audio[j].currentTime = 0;
        }
    }
    this.audio[i].play(); 
  }
  stop(i){ this.audio[i].pause(); }
  begin(i){  this.audio[i].currentTime = 0; }
  
} 
























