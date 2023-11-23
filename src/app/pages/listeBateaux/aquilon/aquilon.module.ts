import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AquilonPageRoutingModule } from './aquilon-routing.module';

import { AquilonPage } from './aquilon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AquilonPageRoutingModule
  ],
  declarations: [AquilonPage]
})
export class AquilonPageModule {}
