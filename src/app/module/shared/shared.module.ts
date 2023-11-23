import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../components/header/header.component';
import { QuantiteModalPage } from '../../modals/quantite-modal/quantite-modal.page';
import { FormsModule } from '@angular/forms';
import { DateModalPage } from '../../modals/date-modal/date-modal.page';
import { LieuModalPage } from '../../modals/lieu-modal/lieu-modal.page';
import { InformationComponent } from 'src/app/components/information/information.component';



@NgModule({
  declarations: [HeaderComponent, QuantiteModalPage, DateModalPage, LieuModalPage, InformationComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports:[HeaderComponent, InformationComponent]
})
export class SharedModule { }
