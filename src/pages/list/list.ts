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
        this.notes = ['La préparation du sol', 'La semence', 'Le semis', 'Le sarclage', 'Les engrais', 
        'Les traitements', 'La récolte', 'Le séchage', 'Le battage', 'Le tri', 'La conservation', 
        'Le stockage'];

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
     this.questions = [[['1. Quels sols pour le niébé pluvial ?','A. Les sols sableux-limoneux bien drainés conviennent au niébé','B.  On peut cultiver le niébé dans les  bas fond','C. Le niébé tolère les sols trop humides','D. Toutes les réponses précédentes sont vraies'],
     ['2.Dans quelles conditions fait-on le labour ?', 'A. après une bonne pluie et la profondeur devrait atteindre 20 cm', 'B. A tout moment ', 'C. après une bonne pluie et la profondeur devrait atteindre 70 mm ', 'D. Toutes les reponses sont fausses '], 
     ['3.Quel est l’utilité du labour ? ', 'A. labourer et herser le champs permet de stimuler la croissance des racines ', 'B. labourer permet d’améliorer les rendements ', 'C. le labour est facultatif et n’a aucune incidence sur le rendement ', 'D. les reponses a et bsont vraies '],
     ['4. Quelle quantité de fumure organique pour un ha de niébé ? ', 'A. Pour 1 ha de culture du niébé, il faudrait en moyenne 1 à 5 tonnes de fumure organique ', 'B. Pour un ha il faudrait en moyenne 6 à 10 tonnes de fumure organique', 'C. Pour un hectare de production, il faudrait pus de 10 tonnes de fumure organique', 'D. Aucune des réponses précédentes n’est vraie ']], 
     [['1. Où trouve-t-on la semence de qualité ?', 'A.	Avec n’importe quel commerçant au marché', 'B.	Avec des producteurs semenciers agrées', 'C. A l’INERA s’il n’y a pas de producteurs semenciers agrées à proximité', 'D.	les réponses B et C  sont vraies'],
     ['2.	Quels types de graines faut-il utiliser pour avoir de bons rendements', 'A. Les graines de consommation', 'B. Les semences certifiées', 'C. les récoltes de l’année précédente', 'D. Aucune réponse n’est vraie'], 
     ['3. Quels critères tient-on compte dans le choix de la variété','A. Le choix de la variété doit tenir compte de la durée du cycle cultural, du potentiel de rendement et des contraintes biotiques et abiotiques de la zone de production','B. Le choix de la variété doit tenir exclusivement compte de son accessibilité (prix,disponibilité…)','C. Le choix de la variété doit tenir uniquement compte des opportunités de revente du niébé','D. Toutes les reponses sont vraies'], 
     ['4. Quelle quantité de semences pour 1 ha de niébé en culture pure ?','A. 3 kg de semences', 'B. 40 kg de semences','C. 60 kg de semences','D. 12  à 25 kg de semences'], 
     ['5. Laquelle de ces variétes de niébé, possède le cycle de production le plus court','A. IT 98 K-205-8','B. IT 90 K-372-1-2','C. KVX-30-309-6G','D.IT99 K-573-1-1'], 
     ['6. Parmi les variétés suivantes laquelle est  semi-rampante ?','A. IT 98 K-205-8','B.IT99 K-573-1-1','c. IT 97 K-499-38','D. IT 97 K-499-35'],
     ['7. Question : laquelle de ces variétés possède le meilleur  rendement ?', 'a. IT99 K-573-1-1', 'b. IT 98 K-205-8', 'c. IT96D-610-', 'd.  IT 97 K-499-38'], 
     ['8. Laquelle de ces variétés tolère mieux la sécheresse', 'A. IT99 K-573-1-1 ', 'B. IT 98 K-205-8 ', 'C. IT96D-610- ', 'D. IT 97 K-499-38 '], 
     [ '9.Quel traitement des semences avant le semi ?', 'A. Il faut traiter la semence avec le calthio contre les insectes et les maladies avant de semer', 'B. Il n’est pas necessaire de faire un traitement des semences avant le semis', 'C. Il faudrait traiter les semences avec le decis avant les semis ', 'D. Toutes les reponses précédemment proposées sont vraies' ]],
     [['1. Quels écartements en culture pure ?','A.	Pour les variétés extra précoces: 50 cm entre les lignes et	20 cm entre les poquets','B. Pour les diverses variétés de niébé: 60 à 65 cm entre les lignes et 40 cm entre les poquets ','C.  Pour les variétés intermédiaires 80 Cm entre les lignes et 40 cm entre les poquets','D. toutes les réponses sont vraies'],
     ['2. Quels écartements en culture associée de niébé ?','A. En culture associée,  le semis de 4 lignes de niébé entre 2 lignes de mil ou sorgho donne des bons résultats','B. En culture associée,  le semis de 2 lignes de niébé entre 4 lignes de mil ou sorgho donne des bons résultats','C. En culture associée,  le semis de 4 lignes de niébé entre 4 lignes de mil ou sorgho donne des bons résultats','D. En culture associée,  le semis de 2 lignes de niébé entre 2 lignes de mil ou sorgho donne des bons résultats'],
     ['3. A quelle période doit-on semer le niébé pluvial (variétés extra-précoces :60-70 jours) ?','A. Les semis doivent se faire quand la pluviométrie est forte. la date de semis varie selon les variétés et les zones. Elle se situe généralement de fin juin jusqu’au 15 juillet','B. Entre décembre et janvier','C. Après une bonne pluie (15mm au minimum)','D. Les réponses A et C sont vraies'],
     ['4. Combien de graines de niébé faut-il en moyenne par poquet ?','A.	5 graines','B.	3 graines','C.	4 graines','D.	1 graine'],
     ['5. Pourquoi faut-il enrober les semences avant les semis ?','A. Pour éloigner les insectes','B. Pour éviter les maladies','C. Pour permettre une bonne germination','D. toutes les réponses sont vraies'],
     ['6. Pourquoi faut-il faire des re-semis et démarriage ?','A. On fait le resemis parce que si la semence est mal traitée, elle subit des dommages par les insectes','B. On fait le resemis une semaine après les semis si la germination n’est pas satisfaisante','C. On doit faire le démariage à 2 plants par poquets','D.   Toutes les réponses sont vraies']],
     [['1.	Quand faut-il sarcler le niébé ?','A.  Il faut faire le sarclage chaque mois','B. Il faut faire le premier sarclage après la levée soit environ 15 jours après semis','C. Faire un deuxième sarclage 15 jours après celui du premier','D. Les réponses B et C sont vraies'],
     ['2.	Quel est l’intérêt du sarclage ?','A.  Le sarclage permet de débarrasser le site des arbustes et broussailles.  ','B. Le sarclage permet de mesurer la superficie de la parcelle','C. Le sarclage favorise un bon développement des racines du niébé','D. Les réponses A  et C sont vraies'],
     ['3.	Comment faire le sarclage ?','A.	Le sarclage peut se faire manuellement ou à l’aide d’une charrue','B.	Le sarclage doit obligatoirement se faire à la main','C.	Le sarclage peut se faire avec des billons','D.	Les réponses A et C sont vraies']],
     [['1.	Laquelle de ces affirmations est vraie ?','A.	Le niébé n’a pas besoin de beaucoup d’engrais azoté parce qu’il fixe l’azote contenu dans l’air','B.	Sur les sols pauvres en azote, il est nécessaire d’appliquer une petite quantité d’azote au démarrage pour un bon rendement','C.	Trop d’engrais azoté entrainera une croissance végétative abondante mais une faible production de graine','D.	Toutes les réponses sont vraies'],['2.	Laquelle de ces affirmations est vraie ?','A.	Le niébé a besoin de plus de phosphore que d’azote','B.	Le niébé a plus besoin de potassium  que d’azote','C.	Le niébé a plus besoin d’azote que de phosphore','D.	Toutes les réponses sont vraies'],
     ['3.	Les doses recommandées d’engrais minéral sont les suivantes :','A.	100 kg de NPK et 100 kg d’urée par ha','B.	100 kg de NPK et 50 kg d’urée par ha','C.	50 kg de NPK et 100 kg d’urée par ha','D.	50 kg de NPK et 50 kg d’urée par ha'],
     ['4 . Laquelle de ces affirmations est vraie ?','A.	L’engrais minéral  doit être enfoui dans la terre','B.	On applique l’engrais minéral 14 jours après les semis','C.	L’engrais minéral adapté pour le niébé est le 14-23-14','D.	Toutes les réponses sont vraies']],
     [['1.	Combien de traitements chimiques contre les ravageurs faut-il pour le niébé ?','A.	Au moins 1','B.	Au moins 2','C.	Plus de 4','D.	Aucune bonne réponse'],
     ['2.	Quand faire le premier traitement chimique contre les insectes ravageurs ?','A.	Vers 35 jours après semis à la formation des boutons floraux','B.	Vers 15 jours après les semis','C.	Vers 70 jours après les semis','D.	Immédiatement après les semis'],
     ['3.	Quand faire le deuxième traitement chimique contre les insectes ravageurs ?','A.	Vers 35 jours après semis à la formation des boutons floraux','B.	Vers 15 jours après les semis','C.	Vers 70 jours après les semis','D.	15 jours après le premier traitement à la formation des gousses'],
     ['4.	Quel produit pour le traitement ?','A.	Decis ','B.	Des produits naturels comme le tabac, piment, ou neem','C.	Les feuilles d’ecalyptus','D.	Les réponses A et B sont vraies'],
     ['5.	Quand est-ce qu’il ne faut pas faire le traitement ?','A.	Pendant la journée','B.	Pendant la pluie','C.	Quand il y a beaucoup de vent','D.	Les réponses b et c sont vraies'],
     ['6.	Laquelle de ces affirmations est vraie ?','A.	Si l’eau utilisée dans le pulvérisateur est sale, le traitement peut se dégrader facilement','B.	Même si l’eau est sale, cela ne joue pas sur le traitement','C.	Pour le traitement on peut mélanger 32 ml de décis, 40 ml de titan et 16 litres d’eau propres','D.	Les réponses A et C sont vraies'],
     ['7.	Est-il conseillé d’utiliser des herbicides pour le niébé ?','A.	absolument,il existe des herbicides conseillés ','B.	oui il n’y a aucun risque pour tous les herbicides','C.	non, cela pourrait abimer le niébé','D.	toute les réponses sont vraies'],
     ['8.	quelles sont les phanérogames parasites du niébé ?','A.	le striga et le géranium','B.	le striga et l’alectra','C.	l’alectra et le géranium','D.	le striga et le bersim'],
     ['9.	comment se manifeste le striga :','A.	jaunissement des parties des limbes comprises dans les nervures','B.	jaunissement des racines','C.	verdissement des feuilles','D.	verdissement des racines '],
     ['10.	comment lutter contre les maladies du niébé ?','A.	rotation des cultures','B.	semences saines','C.	enrobage des semences avant le semis','D.	toutes les reponses sont vraies'],
     ['11.	choisir l’intrus dans la liste des insectes du niébé','A.	les pucerons','B.	les méloïdes','C.	la foreuse des gousses','D.	il n’y a pas d’intrus'],
     ['12.	quand est-ce applique t’on les insecticides ?','A.	le matin','B.	tôt le matin ou tard le soir','C.	à midi','D. Le soir']],
     [['1.	A quel moment récolte-t-on le niébé ?','A.   Quand les gousses sont complètement mures et sèches','B.	Il faut récolter les gousses au fur et à mesure qu’elles dessèchent. En effet, les graines n’arrivent pas à maturité au même moment','C.	En Aout','D.	Les réponses A et B sont vraies'],
     ['2.	Peut-on récolter plusieurs fois le niébé ?','A.	Non, les variétés précoces et à port érigé, une seule récolte suffit','B.	Oui deux à trois fois pour les variétés indéterminées et prostrées','C.	Oui, si la pluviométrie est mauvaise','D.	Les réponses A et B sont vraies'],
     ['3.	Laquelle de ces affirmations est fausse ?','A.	La récolte doit se faire quand 80 à 90 /100 des graines sont sèches','B.	Il est important de récolter les gousses sèches, les gousses non mûres rendent le battage difficile avec une réduction de la qualité','C.	Les gousses humides causent des moisissures','D.	Toutes les réponses sont fausses']],
     [['1.	Où sécher  les gousses de niébé ?','A.	Aux champs à l’air libre','B.	Dans un lieu sec et sain','C.	Sur le toit','D.	Aucune bonne réponse'],
     ['2.	Combien de temps faut-il sécher le niébé ?','A.	Dans la plupart des cas entre 2 à 3 jours','B.	Pendant deux semaines','C.	Jusqu’à ce qu’il soit bien sec','D.	Les réponses A et C sont vraies'],
     ['3.	Pourquoi faut-il bien sécher le niébé ?','A.	Pour éviter qu’il se décompose','B.	Pour mieux le conserver','C.	Pour avoir de meilleurs rendements','D.	Toutes les réponses sont vraies']],
     [['1.	Comment obtenir un  niébé battu de qualité ?','A.	En utilisant une batteuse pour le niébé ','B.	En nettoyant les graines et en les vannant pour les séparer des fanes ou pailles','C.	En triant les graines après battage et vannage pour enlever toutes les impuretés avant la conservation','D.	Toutes les réponses sont vraies'],
     ['2.	Laquelle de ces affirmations est vraie ?','A.	Le battage du niébé peut être manuel ou mécanique','B.	Un battage léger au bâton permet d’éviter d’endommager les graines','C.	Des machines à battage existent sur différentes formes et tailles et fonctionnent à l’essence, au gasoil ou au courant électrique','D.	Toutes les réponses sont vraies'],['3.	Laquelle de ces affirmations est vraie ?','A.	La batteuse mécanique  réduit la pénibilité du travail','B.	La batteuse mécanique permet d’avoir un niébé de qualité','C.	Faire le vannage contre le vent permet de faire emporter les matières inertes telles les cosses et les graines cassées','D.	Toutes les réponses sont vraies']],
     [['1.	Le tri consiste à : ','A.	Eliminer les petites graines,','B.	Eliminer les graines cassées','C. Eliminer les graines des différentes couleurs','D.	Toutes les réponses sont vraies']],
     [['1.	Comment conserver le niébé ?','A.	En utilisant  des produits chimiques pour conserver les graines dans des sacs ou dans des récipients spéciaux','B.	On peut conserver aussi sans traitement chimique dans des sacs pics','C.	En utilisant des sacs ordinaires','D.	Les réponses A et B sont vraies']],
     [['1.	Les trois problèmes importants de stockage sont :','A.	Les insectes, les moisissures et les souris','B.	L’eau , la chaleur et l’humidité','C.	La pluie , le vent et la chaleur','D.	Toutes les réponses sont vraies'],
     ['2.	Laquelle de ces affirmations est vraie','A.	Les sacs de niébé doivent être stockés dans des magasins qui permettent de les protéger contre l’humidité et les attaques des ravageurs comme les insectes et les rongeurs','B.	L’insecte le plus dévastateur durant le stockage est la bruche','C.	Le plus tôt on récolte les gousses, mieux on réduit l’infestation','D.	Toutes les réponses sont vraies'],
     ['3.	Laquelle des réponses est fausse : la préparation du magasin comporte les éléments suivants :','A.	La réparation de la toiture et des ouvertures','B.	Le colmatage des brèches et fissures ','C.	La vérification de l’état des palettes ','D.	Le traitement au décis des grains']]];
     
     
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

































