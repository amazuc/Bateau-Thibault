import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Produit } from '../../interfaces/produit';
import { NavParams } from '@ionic/angular';
import { PanierService } from '../../services/panier/panier.service';

@Component({
    selector: 'app-quantite-modal',
    templateUrl: 'quantite-modal.page.html',
    styleUrls: ['quantite-modal.page.scss'],
})
export class QuantiteModalPage {
    selectedQuantity = 0
    produit!: Produit
    constructor(private modalController: ModalController, private navParams: NavParams, private panierService: PanierService) {
        this.produit = this.navParams.get('produit');
        this.selectedQuantity = this.produit.quantite
    }

    close() {
        this.modalController.dismiss();
    }

    decreaseQuantity(){
        if (this.selectedQuantity > 0) {
            this.selectedQuantity--;
          }
    }

    increaseQuantity(){
        this.selectedQuantity++;
    }

    valider(){
        this.panierService.modifierQuantite(this.produit.id, this.selectedQuantity)
        const dataToReturn = {
            quantite: this.selectedQuantity,
            // Ajoutez d'autres données si nécessaire
          };
        this.modalController.dismiss(dataToReturn);
    }
}
