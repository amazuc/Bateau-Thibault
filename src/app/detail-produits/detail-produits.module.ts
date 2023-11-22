import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailProduitsPageRoutingModule } from './detail-produits-routing.module';

import { DetailProduitsPage } from './detail-produits.page';

import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailProduitsPageRoutingModule,
    SharedModule
  ],
  declarations: [DetailProduitsPage]
})
export class DetailProduitsPageModule {}
