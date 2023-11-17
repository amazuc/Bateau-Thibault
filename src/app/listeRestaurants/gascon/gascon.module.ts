import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GasconPageRoutingModule } from './gascon-routing.module';

import { GasconPage } from './gascon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GasconPageRoutingModule
  ],
  declarations: [GasconPage]
})
export class GasconPageModule {}
