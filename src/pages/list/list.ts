import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})


export class ListPage 
{
  titles: string;
  notes: string[];
  questions: string[][][];
  index: string[];
  reponses: string[][];
  c: string = "vert";
  audio: any = new Audio('assets/audio/page_quizz.m4a');
  messages: string[][];
  
  
  items: Array<{ reponse: string[], ind: string, title: string, note: string, question: string[][], message: string[]}>;




  constructor(public navCtrl: NavController, public navParams: NavParams) 
      {
      
/** TABLEAU DE MESSAGES AUDIO */
        this.messages = [['1-1','1-2','1-3','1-4','1-5'], ['2-1','2-2','2-3','2-4','2-5','2-6','2-7','2-8','2-9'],['3-1','3-2','3-3','3-4','3-5','3-6'], ['4-1','4-2','4-3'], ['5-1','5-2','5-3','5-4'], ['6-1','6-2','6-3','6-4','6-5','6-6','6-7','6-8','6-9','6-10','6-11','6-12'], ['7-1','7-2','7-3'], ['8-1','8-2','8-3'], ['9-1','9-2','9-3'], ['10-1'], ['11-1'], ['12-1','12-2','12-3']];

/** TABLEAU A UNE DIMENSION */
     /** Tableau de notes */
        this.notes = ['Tẽn -gãongã manegre', 'Bōn-buudã yãkre', 'bʋdbo', 'wargã', 'Nasaar birg ningri',
        'puusgu', 'Nogbo', 'kʋɩɩsgo', 'Pãbre (sogbo)', 'Tũusg', 'Puglu (yol-mana-tagda)',
        'Bĩngri'];

      /** Tableau de titres */
        this.titles = 'Etape ';
        
      /** Index */
        this.index = ['1','2','3','4','5','6','7','8','9','10','11','12'];
        
      /** Reponses */
        this.reponses = [['1','1','4','1'],
        ['4','2','1','4','1','2','4','3','1'],
        ['4','1','4','2','4','4'],
        ['4','4','4'],
        ['4','1','2','4'],
        ['2','1','4','4','4','4','1','2','1','4','4','2'],
        ['4','4','4'],
        ['2','4','4'],
        ['4','4','4'],
        ['4'],
        ['4'],
        ['1','4','4']];
 
/** TABLEAU A TROIS DIMENSIONS */
     this.questions = [[['1.	Tẽn-gãong bʋg n sɛgd ne bɛng koobo ?','A.	Tẽn gãong sẽn yaa bol-biisga','B. D toẽ n koo  bɛngbãad pʋsẽ','C. bɛng nonga tẽn-gãong sẽn yaa maasr wʋsgo','D. leoã sẽn loogã fãa yaa sɩda'],
          ['2. wakat bʋg la d toẽ n gudg tẽn –gãongã (labuur) ?', 'A. sa-sōng poor t’a maasrã toẽ n ta sãntɩmetr 20', 'B. wakat fãa ', 'C. sa-sōng poor t’a maasrã zulum toẽ n ta sãntɩmetr 70', 'D. leoã sẽn loogã fãa pa sɩd ye '],
          ['3. Tẽn –gãongã gudgr sõmnem yaa bõe  (labuur sõmnem yaa bõe)? ', 'A. pʋʋga gudgr la tāndaga sãeegr busda yẽgã ', 'B. Tẽn-gãongã gudgr (labuur) paasda ɛktaar pʋgẽ paoongã', 'C. Gudgrã pa tilae ye, a le pa kẽesd a toog ɛktaar pʋgẽ paoongẽ wã ye ', 'D. lɛo a A ne B yaa Sɩda'],
          ['4. Tẽn-gãongã manegr pʋgẽ yaa mo-birg waooglem (sarɛt sõor) sẽn ta wãn n segd n ning bɛng ɛktaar a yeyn pʋgẽ ? ', 'A. bɛng pʋʋga sẽn yaa ɛktaar a yeyn (ɛkt 1) , mo-birga  segda ne sẽn zems tond a 1 n tãag a 5 ', 'B. ɛktaar a yeyn (ɛkt 1) segda ne sẽn zems mo-birg tond 20 n tãag a 30', 'C. pʋʋgɛktaara a 1 segda ne mo-birg tond 10', 'D. lɛo wã sẽn loogã ba a yeyn pa sɩd ye']],
          [['1. 1.	Yɛ la d paamd bōn-bu sõngo ?', 'A.	a.	Ne lɛɛbd fãa sẽn be raagẽ wa', 'B.	b.	Ne bōn-bu –Koaadb sẽn tar-b sɛba', 'C. c.	ɩnera tɩ bu –Koaadb sẽn tar-b sɛb sãn ka yambẽ(pẽ)', 'D.	d.	B wa ne C wã yaa sɩda'],
          ['2.	2.	Beng bɛɛl bʋs la d tõe n tʋm ne n paam ɛktaar pʋgẽ paaong sẽn yaa sõnma ?', 'A. a.	Beng ritga', 'B. b.	Beng buud sẽn yi beng-bu-koaadbã nengẽ', 'C. c.	Yʋʋmdsẽn loogã bɛngã', 'D. d.	Leoor ba a yeyn pa sɩd ye'],
          ['3. 3.	Yaa nao kẽnd bʋs la d rikd sẽn kẽed ne beng buudã yãkre?','A. a.	beng buudãyãkr segd n tũu ne a raarã yoglem , a ɛktaar pʋgẽ paoong sẽn ya to-to, la a sẽn sagd babg ninsi','B. b.	bõn- buudã yãkr segd n tũu ne a paoonga (ligdi, yãabo) , bala','C. c.	bõn- buudã yãkr segd n tũu ne a leebga sẽn yaa to-to bala','D. d.	leoã fãasẽn loogã yaa sɩda'],
          ['4.4.	bõn- buud kilo wãn n segd bʋd bɛng pʋʋg  ɛktaara a 1 pʋgẽ?','A. a.	bõn- buud kilo a 3', 'B. b.	bõn- buud kilo  40','C. b.	bõn- buud kilo  60','D. d.	bõn- buud kilo 12 n tãag kilo 25'],
          ['5.5.	beng buud nins sẽn pʋgdã pũsẽ ya bʋg n yaa beng-bu toolg n  yɩɩd a taabã?','A. a.	IT 98 K-205-8','B. b.	 IT 90 K-372-1-2','C. KVX-30-309-6G','D.d.	IT99 K-573-1-1'],
          ['6. 6.	bõn- buudnins sẽn pʋgdã pũsẽya bʋg n tẽemd bilfu?','A. a.	IT 98 K-205-8','B.b.	IT99 K-573-1-1','c. IT 97 K-499-38','D. IT 97 K-499-35'],
          ['7. 7.	bõn- buudnins sẽn pʋgdã pũsẽ, ya bʋg ɛktaar pʋgẽ paoong n yɩɩd a taabã?', 'a. IT99 K-573-1-1', 'b. IT 98 K-205-8', 'c. IT96D-610-', 'd.  IT 97 K-499-38'],
          ['8. 8.	bõn- buudnins sẽn pʋgdã pũsẽ, ya bʋg tõe war n yɩɩd a taabã?', 'A. IT99 K-573-1-1 ', 'B. IT 98 K-205-8 ', 'C. IT96D-610- ', 'D. IT 97 K-499-38 '],
          [ '9.9.	Yaa tibs bʋg n segd ne bõn- buudã n yaool n bʋde?', 'A. a.	D segd n tibsa bõn- buud ne kalem-n-bʋd ning b sẽn bood ti kalsɩyo wã n gu-a ne bɛɛbã la bãansã n yaool n bʋde', 'B. b.	Pa tɩlae tɩ d kalem bõn- buudã tɩɩm n yaool n bʋd ye', 'C. c.	Segd n tɩbsa bõn- buudã ne desiis n yaool n bʋde ', 'D. d.	lɛo wã fãasẽn loogã yaa sɩda']],
          [['1. aadembʋs n segd bʋ-roog Pʋgẽ?', 'sẽn kẽed ne bõn- buud sẽn wʋsgã (sãntimetr 50 rulg ne a to; sãntimetr 20 sẽbg ne a to)', 'sãntimetr 60 n tãag sãntimetr 65 rulg ne a to pʋgẽ ne sãntimetr 40 sẽbg ne a to pʋgẽ sẽn kẽed ne beng buud wʋsgã pʋgẽ', 'sẽn kẽed ne yaadmã yaa sãntimetr 80 rulg ne a to pʋgẽ ne sãntimetr 40 sẽbg ne to pʋgẽ', 'lɛo wã fãa sẽn loogã yaa sɩda'],
          ['2. yaadembʋs n segd pʋ-gẽdmã pʋsẽ?', 'sẽn kẽed ne pʋ-gẽdmã beng ruls 04 peelg ruls a 2 sʋka n kõt sõma', 'sẽn kẽed ne pʋ-gẽdmã beng ruls  a 02 Ki bɩ peelg ruls a 4 sʋka', 'Pʋ-gẽdmã bʋd beng ruls a 2 Ki bɩ peelg ruls a 4 sʋkan kõt sõma', 'Pʋ-gẽdmã bʋdb yaa beng ruls a 2 Ki bɩ peelg ruls a 2 sʋkan kõt sõma'],
          ['3. Yaa wakat bʋg la d segd n bʋd sẽoog bɛngã (bõn-bu- tʋlse: rasem 60-70)', 'bʋdbã segd n yɩɩd wakat ning saagã sẽn niid sõma.bʋdbã raar tũuda ne bõn-buudã la tẽmsã. A bee wa sẽoog kiuug baasg n tãag sa-sik kiuug rasẽm 15', 'Yʋʋm sar ne yʋʋm vẽkr sʋka', 'Sa song loogr poore (sẽn ta mm 15)', 'Leokr a A ne C n yaa sɩda'],
          ['4. Beng bɛɛl a wãn n segd n zĩnd sẽbg pʋgẽ?', 'bɛɛl a 5', 'bɛɛl a 3', 'bɛɛl a 4', 'bɛɛl a 1'],
          ['5. bõe yĩng ti d segd n kalem bõn-buudã tɩɩm n yaool n bʋde?', 'sẽn na yil n zãag bɛɛbã', 'sẽn na yil  ti bãas ra kẽ ye', 'sẽn na yil ti budbã yi sõma', 'leoã fãa yaa sɩda'],
          ['6. bõe yĩng la d segd n lɩʋʋs wal d woose ?', 'A.	D lɩʋʋsdame bala wakat ninga bõn-buudã tibsg sã pa yɩ sõma bɛɛbã sãamd-a lame', 'B.	D lɩʋʋsda bʋdb loog a rasem a 7 yiibã sãn pa yɩ sõma', 'C.	D segd n woosame n bas yiib-yiib sẽbg fãa pʋgẽ', 'D.	Leoã fãa yaa sɩda']],
          [['1.	Wakat bʋg la d segd n war bɛng pʋʋgo', 'a.	Segd n warã kiuug fãa', 'b.	Segd n warã bɛngã yiib poore ,rat n yeel ti bʋdbã loog a rasem 15', 'c.	N maan warg a yiib soaba, pipi soabã loog a rasem 15', 'd.	B wã ne C wã yaa sɩda'],
          ['2.	2.	Wargã yõod yaa bõe?', 'a.	Warg  kitdame tɩ tuudã menem', 'b.	Warg  kitdame tɩ d mag pʋʋgã n bang a yalem', 'c.	Warg sõngda bɛng yẽg ti b paam pãnga', 'd.	A wã ne C wã yaa sɩda'],
          ['3. Wargã maanda wãn-wãna?', 'a. Wargã toẽ maana ne bõn-kũur bɩ nag kũuri', 'b.	Wargã segd n maana tilae ne nugu', 'c.	Wargã toẽ n takame n yik guda', 'd.	Leoã A ne C wã yaa sɩda']],
          [['1.	1.	Yaa tags bʋg yaa sɩda?', 'a. bɛnga pa rat bir meenem wʋsg ye. Bala a maanda a toorẽ bir meenem', 'b. Tẽn-gãong nins sẽn pa tar bir-meenemã noosmã, yaa sõma ti d ning bi-meenem bilf sɩngrã sẽn na yil tɩ ɛktaaar pʋgẽ paoongã yɩ sõma', 'c. Bir-meenem wʋsg kõta wãad wʋsgo la bɛɛlã paoong woogdame', 'd.	Leoã fãa yaa sɩda'],
          ['2. Yaa togs bʋg n yaa sɩda?', 'a. bɛngã rata noosem ning b sẽn boond ti fosfoorã n yiid noosem ning b sẽn boond ti azotã sẽn ya bir-meenmã noosmã', 'b.	bɛngã rata noosem ning b sẽn boond ti potasɩyoma sẽn yaa zẽema n yiid noosem ning b sẽn boond ti azotã', 'c. bɛngã rata azotã n yiid fosfoorã', 'd.	 Leoã fãa yaa sɩda'],
          ['3. Nasaar birgã waooglem sẽn segd yaa woto:', 'a. Bir-sablegã kilo 100 (NPK) ne bir-meenemã (ire) kilo 100 ɛktaar pʋgẽ', 'b.	Bir-sablegã kilo 100 (NPK) ne bir-meenemã (ire) kilo 50 ɛktaar pʋgẽ', 'c. Bir-sablegã kilo 50 (NPK) ne bir-meenemã (ire) kilo 100 ɛktaar pʋgẽ', 'd.	Bir-sablegã kilo 50 (NPK) ne bir-meenemã (ire) kilo 50 ɛktaar pʋgẽ'],
          ['4. Yaa togs bʋg n yaa sɩda?', 'a. Nasaar birga segd n busame', 'b. D ningda nasaar-birgã rasem 15 bʋdbã loogr poore', 'c. Nasaar birg ning sẽn segd ne bɛng yaa 14-23-14', 'd. Leoã fãa yaa sɩda']],
          [['1.	bɛng rata tɩbsg a wãn sẽn na yɩl n zab ne bɛɛbã?', 'a.	Yembre bɩ sẽn yɩɩd rẽ', 'b.	Yiibu bɩ sẽn yɩɩd rẽ', 'c.	sẽn yɩɩd naase', 'd.	leokr ba a yayn pa sɩda'],
          ['2. wakat bʋg la d segd n maan pipi tibsgã (puusgã) sẽn na yil n zab ne bɛɛbã?', 'a. A guudã wakat rat n yeel tɩ sẽn yaa wa rasem 35 bʋdb poore', 'b. bʋdbã poore rasem 15', 'c. bʋdbã poore rasem 70', 'd. bʋdbã saab poore'],
          ['3.	Wakat bʋg la puusgã  yiib soabã segd n maan sẽn na yil n zab ne bɛɛbã?', 'a.	Rasem 35 bʋdbã loogr poore a guudã maan wakato', 'b.	Rasem 15 bʋdbã loogr poore', 'c.	Rasem 70 bʋdbã loogr poore a guudã maan wakato', 'd.	Rasem 15 pipi puusgã loogr poore rat n yeel t’a zibã maaneg wakato'],
          ['4.	Ya  tɩ bʋg la segd n tall n puus ne?', 'a.	Desiis', 'b.	Rog-n mik tito wa taba, kipare, bɩ nimmã', 'c.	Tiig ning b sẽn boond tɩ ekalibtiisã vãado', 'd.	Leoã A ne B wã yaa sɩda'],
          ['5.	Wakat bʋg la puusgã  (tibsgã) segdn n maane?', 'a.	Raara pʋgẽ', 'b.	Saagã pʋgẽ', 'c.	Sebg sẽn waoog wakato', 'd.	Leoã B ne C wã yaa sɩda'],
          ['6.	Yaa togs bʋg n yaa sɩda?', 'a.	Koom ning sẽn ning masĩn puusdgã pʋgẽ wã sãn ko-rẽgdo, tɩbsgã tõe n sãama tʋʋlle', 'b.	Baa koomã yaa rẽgdo, a pa sãamd tibsgã ye', 'c.	Sã n yaa ne tɩbsgã d tõe n naag desiis mililitr 32 tɩta mililitr 40 ne ko-sõng litr 16', 'd.	Leokr A ne C wã yaa sɩda'],
          ['7.	Saglg kõom tɩ b tʋm ne moogã tɩɩm bɛnga koob pʋgẽ bɩ?', 'a.	Tilae moog tit n be b sẽn sagle', 'b.	N yeyn! moogã tit fãa pa tar rabeem ye', 'c.	Ayo! A tõe n sãama bɛngã', 'd.	Leoã fãa yaa sɩda'],
          ['8.	Yaa bʋs n tõ n sāam bɛnga wombo?', 'a.	Wãoongã ne zeraniyomã', 'b.	Wãoongã ne alɛgtra wã', 'c.	alɛgtra wã  ne zeraniyomã', 'd.	Wãoongã ne bɛrsiyumã'],
          ['9.	Wãoongã tʋmda wãn-wãna ?', 'a.	Vãanda moogdame', 'b.	yẽgã moogdame', 'c.	Vãanda lebgda kẽega', 'd.	yẽgã lebgda kẽega'],
          ['10.	wãn-wãn la d segd n zab ne bɛnga bãase ?', 'a.	Kood-n- tedemdẽ', 'b.	Bõn-bu-sõngo', 'c.	Kalem bõn-buudã tɩɩm n yaool n bʋde', 'd.	Leoã fãa yaa sɩda'],
          ['11.	Yaa bʋg n pa segd n zĩnd bɛnga bɛɛb sʋka ?', 'a.	bɛng karense', 'b.	koyondo', 'c.	wõnem wõodo', 'd.	fãa yaa bɛɛba'],
          ['12.	wakat bʋg la d segd n tɩbse ?', 'a.	Yibeoogo', 'b.	Yibeoog pĩnda wall zaabr wĩndg sẽn lʋɩte', 'c.	wĩntosʋka', 'd.	zaabre']],
          [['1.	wakat bʋg la d nogd bɛnga ?', 'a.	A zĩbã n wat n kog zãnga lab kʋɩ', 'b.	Nogda bilf-bilfu, zĩbã sẽn kʋɩta wakato (bɛnga pa naagd taab n kʋɩ ye)', 'c.	Sa-Sik-Kiuugu', 'd.	A ne B leokrã yaa sɩda'],
          ['22.	Tõe n noga bɛnga noor ka tɛk bɩ ?', 'a.	Ayo ! bõn-bu-tʋʋlsã sẽn pa tẽemdã ya nog-vuka', 'b.	N yeyn ! noor a yiib bɩ tãabo sẽn kẽed ne bõn-buud nins a taabã', 'c.	N yeyn ! saagã niib sãn pa sõma', 'd.	A ne B leokrã yaa sɩda'],
          ['3.	Togs bʋg n pa sɩda ?', 'a.	Nogbã segd n maana wakat ninga bɛɛlã 80 bɩ 90 koabg zug sãn kʋɩ', 'b.	Yaa sõma ti nogbã yɩ zib nins sẽn kʋi wã.sẽn pa kʋi bã kitdame ti pãpã yaa toogo', 'c.	Zib-maasã wata ne pukri', 'd.	Leoã fãa pa sɩd ye']],
          [['1.	yɛ la bɛng segd n kʋɩɩse?', 'a.	pʋʋgẽ wã viʋʋgã pʋgẽ', 'b.	ziig sẽn yaa koeenga n yaa yolemde ziigẽ', 'c.	Roogã zugu', 'd.	Leokr baa a yeyn pa sõma ye'],
          ['2.	Wakat a wãn la bɛng segd n kʋɩɩse?', 'a.	sẽn tɩ yɩɩd fãa rasem a yiibu n tɩ tãag rasem a tãabo', 'b.	rasem 14', 'c.	Hal t’a tɩ kʋi', 'd.	A ne C wã leokr yaa sɩda'],
          ['3.	Bõe yĩng tɩ d segd n kʋɩɩs bɛnga?', 'a.	sẽn na yil t’a ra põog ye', 'b.	sẽn na yil n tõog n bing-a-soma', 'c.	sẽn na yil n tɩ ɛktaar pʋgẽ paoongã yɩ sõma', 'd.	Leoã fãa yaa sɩda']],
          [['1.	wãn-wãn la d maand n paam bɛng sẽn pãb n yaa sõma?', 'a.	D sẽn na n  pãbd ne bɛng-pabdga', 'b.	 D sẽn na n yɩlgd bɛngã la d yelgda sẽn na yil n welg pagdã wall moodã', 'c.	D sẽn na n tũusd bɛngã pãbrã ne yelgrã poor sẽn na yil n yãk sagdã n yaool n pugli', 'd.	Leoã fãa yaa sɩda'],
          ['2.	Togs bʋg n yaa sɩda', 'a.	bɛng pābr tõe n yɩɩ ne nugu wall ne masini', 'b.	pãb faag ne raoog sõngdame tɩ beng-bɛɛla ra wã ye', 'c.	beng-pãbs sẽn be n yaa vʋgs ka tɛa n kẽd ne esãens, gazoale bi kurã', 'd.	Leoã fãa yaa sɩda'],
          ['3.	Togs bʋg n yaa sɩda', 'a.	bɛng pãbdgã woogda tʋʋmdã naongo', 'b.	bɛng pãbdgã kitdame tɩ d paam bɛng sõngo', 'c.	yelg n segd sebgã kitdame tɩ yell yaalsã ne beng kaoomsã looge', 'd.	Leoã fãa yaa sɩda']],
          [['1.	Tũusg yaa…', 'a.	Beng baoonegã yãgsgo', 'b.	Beng-kaoomsã', 'c.	Ne bɛng sẽn tar kõbg a to', 'd.	Leoã fãa yaa sɩda']],
          [['1.	bɛng pugunda wãn-wãna?', 'A.	Pugunda ne nasaar tɩɩm n ning yond bɩ teed a tab pʋsẽ', 'B.	D tõe pugla ne yol-mana-tagdã (pics) n pa ning tɩɩm ye', 'C.	Pugunda ne yol-zaala', 'D.	A ne B leokrã yaa sɩda']],
          [['1.	Zu-loees a tãab nins sẽn yɩɩd bɛngã puglug pʋgẽ la woto:', 'a.	bɛɛbã (bõn-yɩgdsã),pukrã la yõeesã', 'b.	Koom,tʋʋlgo la maasre', 'c.	Saaga, sebgo la tʋʋlgo', 'd.	Leoã fãa yaa sɩda'],
          ['2.	Togs bʋg n yaa sɩda', 'a.	bɛngã yond segd n bĩngame sẽn na yil n gũ-b ne bɛɛbã (bõn-yɩgdse,yõeese)', 'b.	bɛ ning sẽn sãamd n tɩ yɩɩd ya beng bila (salense) bĩngra wakato', 'c.	D sẽn na n nog pĩndã n woogda a sãangã', 'd.	Leoã fãa yaa sɩda'],
          ['3.	Leokr bʋg n yaa sɩda: Mangasã manger tũuda ne yel-kãensa', 'a.	Roogã zug la kʋlensã manegre', 'b.	Zĩis nins sẽn pusã manegre', 'c.	Raad nins sẽn na n deeg-b ya dã gesgo', 'd.	Beng-bɛɛlã tibsg ne desiis']]];




/** TABLEAU A DEUX DIMENSIONS */       
      /** Tableau d'item contenant le tableau d'icon, de note et de titre */
        this.items = [];
        for (var i = 0; i < 12; i++)
            this.items.push({ reponse: this.reponses[i], ind: this.index[i], title: this.titles + (i+1), note: this.notes[i] , question: this.questions[i], message: this.messages[i]  }); 
                        
        }



     itemTapped(event, item) {
        this.navCtrl.push(ItemDetailsPage, {item: item});
     }
     
       
  play(){  this.audio.play();  }
  stop(){  this.audio.pause(); }
  begin(){ this.audio.currentTime = 0; }
}

































