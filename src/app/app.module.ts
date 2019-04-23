import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { Menu2Page } from '../pages/menu2/menu2';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { SuitePage } from '../pages/suite/suite';
import { ContactPage } from '../pages/contact/contact';
import { FicheSuitePage } from '../pages/fiche-suite/fiche-suite';
import { ResultatPage } from '../pages/resultat/resultat';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    SuitePage,
    ContactPage,
    FicheSuitePage,
    Menu2Page,
    ResultatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    SuitePage,
    ContactPage,
    FicheSuitePage,
    Menu2Page,
    ResultatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
