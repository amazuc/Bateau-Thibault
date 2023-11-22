import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../header/header.component';
import { QuantiteModalPage } from '../modals/quantite-modal/quantite-modal.page';
import { FormsModule } from '@angular/forms';
import { DateModalPage } from '../modals/date-modal/date-modal.page';
import { LieuModalPage } from '../modals/lieu-modal/lieu-modal.page';



@NgModule({
  declarations: [HeaderComponent, QuantiteModalPage, DateModalPage, LieuModalPage],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports:[HeaderComponent]
})
export class SharedModule { }
