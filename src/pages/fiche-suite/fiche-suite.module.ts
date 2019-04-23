import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FicheSuitePage } from './fiche-suite';

@NgModule({
  declarations: [
    FicheSuitePage,
  ],
  imports: [
    IonicPageModule.forChild(FicheSuitePage),
  ],
})
export class FicheSuitePageModule {}
