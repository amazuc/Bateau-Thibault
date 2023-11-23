import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomardPageRoutingModule } from './homard-routing.module';

import { HomardPage } from './homard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomardPageRoutingModule
  ],
  declarations: [HomardPage]
})
export class HomardPageModule {}
