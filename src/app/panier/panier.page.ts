import { Component, OnInit } from '@angular/core';
import { AlertController, AlertInput } from '@ionic/angular';
import { PanierService } from '../services/panier/panier.service';
import { Produit } from '../interfaces/produit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  dateLivraison: string = ""
  heureLivraison: string = ""

  articles: Produit[] = []

  lieux = [
    {
      id: 1,
      adresse: 'Adresse 1'
    },
    {
      id: 2,
      adresse: 'Adresse 2'
    },
    // Ajoutez d'autres articles ici
  ];

  lieuLivraison = 0;

  constructor(private alertController: AlertController, private panierService : PanierService, private router : Router) { }

  ngOnInit(): void {
    this.articles = this.panierService.getPanier()
  }

  onGoToHome() {
    this.router.navigate(['/home'])
  }

  onGoToPanier(){
    this.router.navigate(['/panier'])
  }

  async modifierQuantite(articleId: number) {
    const article = this.articles.find(article => article.id === articleId);
    var quantite = ""
    if (article)
      quantite = article.quantite.toString()
    const alert = await this.alertController.create({
      header: 'Modifier la quantité',
      inputs: [
        {
          name: 'nouvelleQuantite',
          type: 'number',
          value: quantite, // Valeur actuelle de la quantité
          placeholder: 'Nouvelle quantité',
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
        },
        {
          text: 'Enregistrer',
          handler: (data) => {
            const nouvelleQuantite = parseInt(data.nouvelleQuantite, 10);
            if (!isNaN(nouvelleQuantite) && nouvelleQuantite >= 0 && article) {
              article.quantite = nouvelleQuantite;
              this.panierService.modifierQuantite(articleId, nouvelleQuantite)
            }
          },
        },
      ],
    });

    await alert.present();

  }

  calculerPrixTotal() {
    return this.articles.reduce((total, article) => total + article.price * article.quantite, 0).toFixed(2);
  }

  ouvrirLieuLivraison() {
    const lieuOptions = this.lieux.map(lieu => ({
      type: 'radio',
      label: lieu.adresse,
      value: lieu.id.toString(), // Assurez-vous que la valeur est une chaîne
      checked: false, // Mettez à true pour cocher par défaut un élément
    })) as AlertInput[];

    this.alertController
      .create({
        header: 'Sélectionner le lieu de livraison',
        inputs: lieuOptions,
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
          },
          {
            text: 'Valider',
            handler: (lieuId) => {
              // Logique à exécuter lorsque l'utilisateur clique sur "Valider" (lieu de livraison sélectionné)
              const selectedLieu = this.lieux.find(lieu => lieu.id.toString() === lieuId);
              if (selectedLieu) {
                this.lieuLivraison = selectedLieu.id;
              }
            },
          },
        ],
      })
      .then(alert => alert.present());
  }



  ouvrirDateLivraison() {
    const currentDate = new Date();
    const currentDateString = currentDate.toISOString();
    this.alertController
      .create({
        header: 'Sélectionner la date et l\'heure de livraison',
        inputs: [
          {
            name: 'date',
            type: 'date',
            min: currentDateString, // Empêche de sélectionner une date antérieure à aujourd'hui
          },
          {
            name: 'heure',
            type: 'time',
          },
        ],
        buttons: [
          {
            text: 'Annuler',
            role: 'cancel',
          },
          {
            text: 'Valider',
            handler: (data) => {
              // Logique à exécuter lorsque l'utilisateur clique sur "Valider" (date et heure de livraison sélectionnées)
              this.dateLivraison = data.date;
              this.heureLivraison = data.heure;
            },
          },
        ],
      })
      .then(alert => alert.present());
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
