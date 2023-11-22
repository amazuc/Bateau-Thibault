import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformationProduitPageRoutingModule } from './information-produit-routing.module';

import { InformationProduitPage } from './information-produit.page';

import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationProduitPageRoutingModule,
    SharedModule
  ],
  declarations: [InformationProduitPage]
})
export class InformationProduitPageModule {}
