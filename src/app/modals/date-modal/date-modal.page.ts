import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
    selector: 'app-date-modal',
    templateUrl: 'date-modal.page.html',
    styleUrls: ['date-modal.page.scss'],
})
export class DateModalPage {
    date: string = new Date().toISOString();
    heure: string = new Date().toISOString();
    selectedDateTime: string = new Date().toISOString();
    constructor(private modalController: ModalController, private navParams: NavParams) {
        this.date = this.navParams.get('date');
        this.heure = this.navParams.get('heure');
    }

    close() {
        this.modalController.dismiss();
    }

    valider(){
        [this.date, this.heure] = this.selectedDateTime.split('T');
        this.heure = this.heure.split(':')[0] + ':' + this.heure.split(':')[1];
        const dataToReturn = {
            date: this.date,
            heure: this.heure
          };
        this.modalController.dismiss(dataToReturn);
    }
}
