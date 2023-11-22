import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { Lieu } from 'src/app/interfaces/lieu';
import { LieuxService } from 'src/app/services/lieux/lieux.service';

@Component({
    selector: 'app-lieu-modal',
    templateUrl: 'lieu-modal.page.html',
    styleUrls: ['lieu-modal.page.scss'],
})
export class LieuModalPage {
    lieuSelect = 0
    lieux:Lieu[] =[]
    constructor(private modalController: ModalController, private navParams: NavParams, private lieuxService: LieuxService) {
        this.lieuSelect = this.navParams.get('lieu');
        this.lieuxService.getLieux().subscribe(data =>{
            this.lieux = data
        })
    }

    close() {
        this.modalController.dismiss();
    }

    valider(){
        const dataToReturn = {
            lieu: this.lieuSelect,
            // Ajoutez d'autres données si nécessaire
          };
        this.modalController.dismiss(dataToReturn);
    }
}
