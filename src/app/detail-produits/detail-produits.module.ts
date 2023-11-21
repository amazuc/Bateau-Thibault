import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailProduitsPageRoutingModule } from './detail-produits-routing.module';

import { DetailProduitsPage } from './detail-produits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailProduitsPageRoutingModule
  ],
  declarations: [DetailProduitsPage]
})
export class DetailProduitsPageModule {}
