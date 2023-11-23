import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JacquesPageRoutingModule } from './jacques-routing.module';

import { JacquesPage } from './jacques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JacquesPageRoutingModule
  ],
  declarations: [JacquesPage]
})
export class JacquesPageModule {}
