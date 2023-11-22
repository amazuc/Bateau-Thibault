import { Component, OnInit } from '@angular/core';
import { AlertController, AlertInput } from '@ionic/angular';
import { PanierService } from '../services/panier/panier.service';
import { Produit } from '../interfaces/produit';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { QuantiteModalPage } from '../modals/quantite-modal/quantite-modal.page';
import { LieuModalPage } from '../modals/lieu-modal/lieu-modal.page';
import { DateModalPage } from '../modals/date-modal/date-modal.page';
import { Lieu } from '../interfaces/lieu';
import { LieuxService } from '../services/lieux/lieux.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  dateLivraison: string = ""
  heureLivraison: string = ""

  articles: Produit[] = []

  lieuLivraison = 0;

  lieux: Lieu[] = []

  constructor(private lieuxService: LieuxService, private modalController: ModalController, private alertController: AlertController, private panierService : PanierService, private router : Router) { }

  ngOnInit(): void {
    this.chargerProduits()
    this.lieuxService.getLieux().subscribe(data =>{
      this.lieux = data
    })
  }

  async chargerProduits() {
    try {
      const panier: Produit[] = await this.panierService.getPanier();
      this.articles = panier
    } catch (erreur) {
      console.error("Erreur lors du chargement des produits :", erreur);
    }
  }

  onGoBack(){
    this.router.navigate(['/produits'])
  }

  ionViewWillEnter() {
    this.chargerProduits()
  }

  async modifierQuantite(articleId: number) {
    this.openQuantiteModal(articleId)
  }

  calculerPrixTotal() {
    return this.articles.reduce((total, article) => total + article.price * article.quantite, 0).toFixed(2);
  }

  ouvrirDateLivraison() {
    this.openDateModal();
}

  ouvrirLieuLivraison() {
      this.openLieuModal()
  }

  async openQuantiteModal(id:number) {
    const modal = await this.modalController.create({
      component: QuantiteModalPage,
      cssClass: 'my-modal-class',
      componentProps: {
        produit: this.articles[id]
      }
    });

    modal.onDidDismiss().then((data) => {
      if (data && data.data) {
        this.articles[id].quantite = data.data.quantite;
      }
    });
  
    await modal.present();
  }

  async openLieuModal() {
    const modal = await this.modalController.create({
      component: LieuModalPage,
      cssClass: 'my-modal-class',
      componentProps: {
        lieu: this.lieuLivraison
      }
    });

    modal.onDidDismiss().then((data) => {
      if (data && data.data) {
        this.lieuLivraison = data.data.lieu; 
      }
    });
    await modal.present();
  }

  async openDateModal() {
    const modal = await this.modalController.create({
      component: DateModalPage,
      cssClass: 'my-modal-class',
      componentProps: {
        date: this.dateLivraison,
        heure: this.heureLivraison
      }
    });

    modal.onDidDismiss().then((data) => {
      if (data && data.data) {
        this.dateLivraison = data.data.date;
        this.heureLivraison = data.data.heure;
      }
    });
  
    await modal.present();
  }

  afficherAlerteValiderPanier() {
    const prixTotal = this.calculerPrixTotal(); // Remplacez par votre propre logique pour calculer le prix total
    const message = `Envoyer votre commande de ${prixTotal} € à Thibault ?`;

    this.alertController
      .create({
        header: 'Envoyer votre commande?',
        message: message,
        buttons: [
          {
            text: 'Non',
            role: 'cancel',
          },
          {
            text: 'Oui',
            handler: () => {
              this.articles.map(article => (article.quantite = 0))
            },
          },
        ],
      })
      .then(alert => alert.present());
  }

  getLieu(lieuId: number) {
    const lieu = this.lieux.find(lieu => lieu.id === this.lieuLivraison);
    if (lieu) return lieu.adresse;
    else return "Reselectionnez un lieu"
  }

  getDate() {
    const options = { weekday: 'long', day: 'numeric', month: 'long' } as Intl.DateTimeFormatOptions;
    const dateFormatee = new Date(this.dateLivraison).toLocaleDateString('fr-FR', options);
    return dateFormatee.charAt(0).toUpperCase() + dateFormatee.slice(1);
  }
}
