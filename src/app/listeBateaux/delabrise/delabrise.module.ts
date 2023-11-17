import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DelabrisePageRoutingModule } from './delabrise-routing.module';

import { DelabrisePage } from './delabrise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DelabrisePageRoutingModule
  ],
  declarations: [DelabrisePage]
})
export class DelabrisePageModule {}
