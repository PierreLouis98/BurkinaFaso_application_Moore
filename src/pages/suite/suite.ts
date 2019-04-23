import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';




@Component({
  selector: 'page-suite',
  templateUrl: 'suite.html',
})
export class SuitePage {

  actor: string[] = ['0','0','0','0','0','0','0','0','0','0','0','0'];
  
  question: string[][];
  
  c: string = "violette";
  i: number = 0;
  audio: any = [];
  index: string[];
  avertissement: string[] = ['0','0','0','0','0'];
 
  items: Array<{ ind: string, interro: string[]}>;
  
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController ) 
  {
  
        /** Index */
        this.index = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14'];
        

        
        /** Tab de question */
        this.question = [['1.	Quelle variété de niébé comptez-vous produire ?','A.	Mobenga','B.	KVX 442','C.	Bengsiido', 'D.  Autres'],
        ['2.	Quel revenu souhaitez-vous obtenir après la vente?','A.	   Moins de 50 000 F','B.	Entre 50 000 et  100 000 F','C.	Entre 100 000 et 200 000 F','D.	Plus de 200 000 F'],
        ['3.	Sur quelle superficie  comptez-vous produire votre niébé ?','A.	Entre 0,25 et un 1 Hectare','B.	Entre 1 et 3 Ha','C.	Entre 3 et  5 Ha', 'D.    Autres'],
        ['4.	A quelle période de l’année souhaitez-vous vendre ?','A.	Entre janvier et mars','B.	Entre avril et juin','C.	Entre juillet et septembre','D.	Entre octobre et décembre'],
        ['5.	Combien de sacs de 100 kg  de niébé espérez-vous récolter  ?','A.	Moins de 5 sacs ','B.	Entre 5 et 20 sacs','C.	Entre 21 et 30 sacs','D.	Plus de 50 sacs'],
        ['6.	Combien vous coute les équipements ?','A.	Moins de 10 000 F','B.	Entre 10 000 et 20 000 F','C.	Entre 20 005 et 50 000 F','D.	Plus de 50 000 F'],
        ['7.	Combien de francs vous coute la main d’œuvre','A.	Moins de 10 000 F','B.	Entre 10 000 et 20 000 F','C.	Entre 20 005 et 50 000 F','D.	Plus de 50 000 F'],
        ['8.	Combien de francs vous coutent les semences','A.	Moins de 10 000 F','B.	Entre 10 000 et 20 000 F','C.	Entre 20 005 et 50 000 F','D.	Plus de 50 000 F'],
        ['9.	Combien de francs vous coutent les produits phyto','A.	Moins de 10 000 F','B.	Entre 10 000 et 20 000 F','C.	Entre 20 005 et 50 000 F','D.	Plus de 50 000 F'],
        ['10.	Combien de francs vous coute l’engrais ','A.	Moins de 50 000 F','B.	Entre 50 000 et 200 000F','C.	Entre 200 000 F et 300 000F','D.	Plus de 300 000'],
        ['11.	Combien de francs vous coutent les autres dépenses ?','A.	Moins de 50 000 F','B.	Entre 50 000 et 200 000F','C.	Entre 200 000 F et 300 000F','D.	Plus de 300 000'],
        ['12.	Quels sont vos besoins de niébé pour la consommation, les dons  (etc) pour l’année ?','A.	Moins de 5 sacs ','B.	Entre 5 et 20 sacs','C.	Entre 21 et 30 sacs','D.	Plus de 50 sacs'],
        ['13.	Quelle quantité de niébé souhaitez-vous vendre ?','A.	Moins de 5 sacs ','B.	Entre 5 et 20 sacs','C.	Entre 21 et 30 sacs','D.	Plus de 50 sacs'],
        ['14.	A quel prix souhaitez-vous vendre  le  Kg  votre niébé ?','A.	Entre 0 et 250 F','B.	Entre 255 et 400 F','C.	Entre 405 et 600 F','D.	Plus de 600 F']];
  
  
        for (var i = 0; i < this.index.length; i++)
            this.audio.push(new Audio('assets/audio/Francais/' + this.index[i] + '.m4a'));
            
        /** Tableau de slides */
        this.items = [];
        for (var j = 0; j < 14; j++)
            this.items.push({ ind: this.index[j], interro: this.question[j]}); 
            
        
                      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuitePage');
  }

        
        
 showAlert() 
 {
     this.navCtrl.push(ContactPage, {actor: this.actor}); 
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



