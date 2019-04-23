import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

import { ModalController } from 'ionic-angular';







@Component({
  templateUrl: 'contact.html'
})

  
  export class ContactPage {
  
    audio: any = new Audio('assets/audio/accueil.m4a');
    avertissement: string[] = ['0','0','0','0','0'];
    actor: string[];
    
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
        this.actor = navParams.get('actor');
        
         if ( this.actor[2] === '1')
    {
        if ( this.actor[4] === '3' || this.actor[4] === '4')
                this.avertissement[0] = "En supposant un rendement maximal de 2 tonnes par ha votre superficie ne vous permet pas d’atteindre  ce niveau de production. ";
    }
     else if ( this.actor[2] === '2')
     {
        if ( this.actor[4] === '1')
                this.avertissement[0] = "En supposant un rendement maximal de 2 tonnes par ha votre superficie vous permet d’avoir plus de production si vous suivez bien l’itinéraire. ";
     }
     else if ( this.actor[2] === '3')
     {
        if ( this.actor[4] !== '4')
                this.avertissement[0] = "En supposant un rendement maximal de 2 tonnes par ha, votre superficie ne vous permet pas d’avoir plus de production si vous suivez bien l’itinéraire.";
     }
     if (this.actor[11] > this.actor[4])
            this.avertissement[1] = "Attention, vos besoins de niébé semblent supérieurs à votre production. ";
     if ( this.actor[12] > this.actor[4] )
            this.avertissement[2] = "Attention, vos besoins de  vente de niébé semblent supérieurs à votre production. ";
     if ( this.actor[13] === '4')
            this.avertissement[3] = "Attention, il est généralement difficile de pouvoir vendre à ce prix. ";
     if ( this.actor[3] === '4')
            this.avertissement[4] = "Attention, les prix sont géneralement plus bas sur cette période à cause de l’offre parfois importante de niébé. ";
  }






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