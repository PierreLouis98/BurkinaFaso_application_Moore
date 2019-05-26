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
        this.question = [['1.	Yaa beng-bu bʋg la yãmb na n ko ?', 'a.	Mo-bɛnga', 'b.	Kom kalle', 'c.	Beng-sɩɩdo', 'd.	Nafi', 'e.	Yiisyande', 'f.	Ninzwe'],
                                  ['2.	Yãmb rat n koosame n paam wãã?', 'a.	Pa rat n koos ye', 'b.	sẽn pa w 10 000', 'c.	W 10 000 ne W 20 000 sʋka', 'd.	 W 20 001 ne W 40 000 sʋka', 'e.	sẽn yɩɩd w 40 000'],
                                  ['3.	Yãmb magd n nan koo pʋʋg yalem sẽn wãna?', 'a.	ɛktaare  ¼ n tãag sẽn pa ta ɛktaare', 'b.	ɛktaare  1 ne sẽn pa ta ɛktaare 3  sʋka', 'c.	ɛktaare  3 ne ɛktaare 5  sʋka'],
                                  ['4.	Yãmb rat n koosame ki bʋgo?', 'a.	yʋʋm vẽkr kiuug  ne tʋʋlg kiuug sʋka', 'b.	tʋʋl-nif kiuug ne sɩgr kiuugsʋka', 'c.	sẽoog kiuug  ne bõn bɩʋʋng kiuug sʋka', 'd.	zi-likr kiuug ne yʋʋm-sar- kiuug sʋka'],
                                  ['5.	Yãmb saagda y  na n noga bɛng kilo 100 yond a wãna?', 'a.	Pa ta yond a 5 ye', 'b.	Yond a 5 ne yond 20 sʋka', 'c.	Yond 21 ne yond 50 sʋka', 'd.	Yɩɩgda yond 50'],
                                  ['6.	Koobã tʋʋm teed raab yikda yãmb wãna?', 'a.	Pa tat W 2000', 'b.	W 2000 ne W 4 000 sʋka', 'c.	W 4001 ne W 10 000 sʋka', 'd.	Yɩɩda w 10 000'],
                                  ['7.	Tʋʋm sẽn maand ne nugã yikda yãmb wãna?', 'a.	Pa tat W 2000', 'b.	W 2000 ne W 4 000 sʋka', 'c.	W 4001 ne W 10 000 sʋka', 'd.	Yɩɩda w 10 000'],
                                  ['8.	Bõn-buudã ligd yikda yãmb wãna?', 'a.	Pa tat W 2000', 'b.	W 2000 ne W 4 000 sʋka', 'c.	W 4001 ne W 10 000 sʋka', 'd.	Yɩɩda w 10 000'],
                                  ['9.	tɩtãligd yikda yãmb wãna?', 'a.	Pa tat W 2000', 'b.	W 2000 ne W 4 000 sʋka', 'c.	W 4001 ne W 10 000 sʋka', 'd.	Yɩɩda w 10 000'],
                                  ['10.	Nasaar birgã ligd yikda yãmb wãna?', 'a.	Pa tat W 10 000', 'b.	W 10 000 ne W 40 000 sʋka', 'c.	W 40 001 ne W 60 000 sʋka', 'd.	Yɩɩda w 60 000'],
                                  ['11.	Depãensa a taabã ligd yikda yãmb wãna?', 'a.	Pa tat W 10 000', 'b.	W 10 000 ne W 40 000 sʋka', 'c.	W 40 001 ne W 60 000 sʋka', 'd.	Yɩɩda w 60 000'],
                                  ['12.	Yãmb raabã ne bɛngã sẽn kẽed  rɩɩbo, kũuni….wɛɛgẽ yʋʋmda tore yaa wãna?', 'a.	Pa ta yond a 5 ye', 'b.	Yond a 5 ne yond 20 sʋka', 'c.	Yond 21 ne yond 50 sʋka', 'd.	Yɩɩgda yond 50'],
                                  ['13.	bɛng yond a wãn la yãmb rat (saagd n na) n koose ?', 'a.	Pa ta yond a 5 ye', 'b.	Yond a 5 ne yond 20 sʋka', 'c.	Yond 21 ne yond 50 sʋka', 'd.	Yɩɩgda yond 50'],
                                  ['14.	yãmb rat (saagd n na) n koosa  bɛng kilo fãa wakɩr a wãna ?', 'a.	zaalem ne w 50 sʋka', 'b.	W 55 ne W 80 sʋka', 'c.	W 81 ne W 120 sʋka', 'd.	Yɩɩda w 120']];
  


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



