import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaphirPageRoutingModule } from './saphir-routing.module';

import { SaphirPage } from './saphir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaphirPageRoutingModule
  ],
  declarations: [SaphirPage]
})
export class SaphirPageModule {}
