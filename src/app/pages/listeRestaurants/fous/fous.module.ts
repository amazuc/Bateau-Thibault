import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FousPageRoutingModule } from './fous-routing.module';

import { FousPage } from './fous.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FousPageRoutingModule
  ],
  declarations: [FousPage]
})
export class FousPageModule {}
