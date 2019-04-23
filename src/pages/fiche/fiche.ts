import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FicheSuitePage } from '../fiche-suite/fiche-suite';


@IonicPage()
@Component({
  selector: 'page-fiche',
  templateUrl: 'fiche.html',
})
export class FichePage {

  titles: string[];
  notes: string[];
  items: Array<{ title: string, note: string }>;
  audio: any = new Audio('assets/audio/accueil.m4a');


  constructor(public navCtrl: NavController, public navParams: NavParams) 
      {
     /** Tableau de notes */
        this.notes = ['La préparation', 'La semence', 'Le semis', 'Le sarclage', 'Les engrais', 
        'Les traitements', 'La récolte', 'Le séchage', 'Le battage', 'Le tri', 'La conservation', 
        'Le stockage'];

      /** Tableau de titres */
        this.titles = ['Etape '];

      /** Tableau d'item contenant le tableau d'icon, de note et de titre */
        this.items = [];
        for (var i = 0; i < 12; i++)
            this.items.push({ title: this.titles[0] + (i+1), note: this.notes[i] }); 
    
    }
    
    itemTapped(event, item) {   this.navCtrl.push(FicheSuitePage, {item: item});    }
            
          
  play(){ this.audio.play(); }
  stop(){ this.audio.pause(); }
  begin(){ this.audio.currentTime = 0; }
  
  
}



































