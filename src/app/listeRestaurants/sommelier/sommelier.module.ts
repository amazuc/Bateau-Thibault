import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SommelierPageRoutingModule } from './sommelier-routing.module';

import { SommelierPage } from './sommelier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SommelierPageRoutingModule
  ],
  declarations: [SommelierPage]
})
export class SommelierPageModule {}
