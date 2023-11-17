import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TourteauPageRoutingModule } from './tourteau-routing.module';

import { TourteauPage } from './tourteau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TourteauPageRoutingModule
  ],
  declarations: [TourteauPage]
})
export class TourteauPageModule {}
