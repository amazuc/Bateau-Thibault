import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ProduitsService } from '../../services/produit/produits.service';
import { Produit } from '../../interfaces/produit';
import { Observable, from, map, switchMap } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { PanierService } from '../../services/panier/panier.service';

@Component({
  selector: 'app-detail-produits',
  templateUrl: './detail-produits.page.html',
  styleUrls: ['./detail-produits.page.scss'],
})
export class DetailProduitsPage implements OnInit {

  produitId: number = 0
  listeProduits$!: Observable<Produit[]>;

  constructor(private route: ActivatedRoute, private produitsService: ProduitsService, private router: Router, private panierService: PanierService) {  
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const produitIdString = params.get('id');
      if (produitIdString !== null) {
        this.produitId = parseInt(produitIdString, 10);
        this.listeProduits$ = this.produitsService.getProduits(this.produitId);
      } else {
        console.error('L\'ID du produit est null.');
      }
    });
  }

  onGoBack(){
    this.router.navigate(['/produits'])
  }


  estDansPanier(produit: Produit): boolean {
    return this.panierService.estDansLePanier(produit)
  }

  quantiteProduit(produit: Produit): number{
    return this.panierService.quantiteProduit(produit)
  }

  loadProduit(produit: Produit){
    let navigationExtras: NavigationExtras = {
      state :{
        produit:produit
      }
    };
    this.router.navigate(['/information'], navigationExtras);
  }

  diminuerQuantite(produit: any) {
    if (produit.quantite > 0) {
      
      this.panierService.enleverDuPanier(produit)
    }
  }
  
  augmenterQuantite(produit: any) {
    this.panierService.ajouterDansLePanier(produit)
  }
}
