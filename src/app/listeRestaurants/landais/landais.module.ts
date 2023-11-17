import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandaisPageRoutingModule } from './landais-routing.module';

import { LandaisPage } from './landais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandaisPageRoutingModule
  ],
  declarations: [LandaisPage]
})
export class LandaisPageModule {}
