import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Produit } from 'src/app/interfaces/produit';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private panierSubject = new BehaviorSubject<any[]>([]);
  panier$: Observable<any[]> = this.panierSubject.asObservable();

  constructor(private storage: Storage) {
    this.init();
  }

  private async init() {
    await this.storage.create();
    const panier = await this.storage.get('panier');
    if (panier) {
      this.panierSubject.next(panier);
    }
  }

  public async getPanier(): Promise<Produit[]> {
    const panier = await this.storage.get('panier');
    if (panier !== undefined) {
      return Promise.resolve(panier);
    } else {
      return Promise.resolve([]);
    }
  }

  ajouterDansLePanier(produit: Produit) {
    const panierActuel = this.panierSubject.value;
    const produitIndex = panierActuel.findIndex(item => item.id === produit.id);
  
    if (produitIndex === -1) {
      // Si le produit n'est pas dans le panier, l'ajouter avec une quantité de 1
      const nouveauPanierItem = { ...produit, quantite: 1 };
      const nouveauPanier = [...panierActuel, nouveauPanierItem];
      this.panierSubject.next(nouveauPanier);
    } else {
      // Si le produit est déjà dans le panier, augmenter la quantité de 1
      const nouveauPanier = panierActuel.map(item => {
        if (item.id === produit.id) {
          return { ...item, quantite: item.quantite + 1 };
        }
        return item;
      });
      this.panierSubject.next(nouveauPanier);
    }
  
    this.sauvegarderPanier();
  }

  enleverDuPanier(produit: Produit) {
    const panierActuel = this.panierSubject.value;
    const produitIndex = panierActuel.findIndex(item => item.id === produit.id);
  
    if (produitIndex !== -1) {
      // Si le produit est dans le panier, diminuer la quantité de 1
      const nouveauPanier = panierActuel.map(item => {
        if (item.id === produit.id) {
          return { ...item, quantite: item.quantite - 1 };
        }
        return item;
      });
  
      // Filtrer les produits avec une quantité supérieure à 0
      const panierFiltre = nouveauPanier.filter(item => item.quantite > 0);
  
      this.panierSubject.next(panierFiltre);
      this.sauvegarderPanier();
    }
  }

  modifierQuantite(idProduit: number, quantite: number) {
    const panierActuel = this.panierSubject.getValue();

    const produitIndex = panierActuel.findIndex(produit => produit.id === idProduit);

    if (produitIndex !== -1) {
      // Le produit existe dans le panier, ajustez la quantité
      if (quantite === 0) {
        // Si la quantité est de 0, retirez le produit du panier
        panierActuel.splice(produitIndex, 1);
      } else {
        // Sinon, ajustez la quantité du produit
        panierActuel[produitIndex].quantite = quantite;
      }

      // Émettez une nouvelle référence du tableau du panier
      this.panierSubject.next([...panierActuel]);
      this.sauvegarderPanier()
    }
  }

  estDansLePanier(produit: Produit): boolean {
    const panierActuel = this.panierSubject.value;
    return panierActuel.some(item => item.id === produit.id);
  }

  quantiteProduit(produit: Produit): number {
    const panierActuel = this.panierSubject.value;
    const produitDansPanier = panierActuel.find(item => item.id === produit.id);
  
    return produitDansPanier ? produitDansPanier.quantite : 0;
  }

  viderPanier(): void {
    this.panierSubject.next([]);
    this.sauvegarderPanier();
  }

  private sauvegarderPanier(): void {
    this.storage.set('panier', this.panierSubject.value);
  }
}
