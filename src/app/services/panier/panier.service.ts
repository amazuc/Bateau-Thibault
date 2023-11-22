import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from, map, switchMap } from 'rxjs';
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
      // Gérez le cas où le panier est indéfini, peut-être en le chargeant à partir d'une source
      // ou en renvoyant une valeur par défaut
      return Promise.resolve([]);
    }
  }

  toggleProduitDansPanier(produit: any) {
    const panierActuel = this.panierSubject.value;
    const produitIndex = panierActuel.findIndex(item => item.id === produit.id);

    if (produitIndex === -1) {
      // Si le produit n'est pas dans le panier, l'ajouter
      const nouveauPanier = [...panierActuel, produit];
      this.panierSubject.next(nouveauPanier);
    } else {
      // Si le produit est déjà dans le panier, le retirer
      const nouveauPanier = panierActuel.filter(item => item.id !== produit.id);
      this.panierSubject.next(nouveauPanier);
    }

    this.sauvegarderPanier();
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

  estDansLePanier(produit: any): boolean {
    const panierActuel = this.panierSubject.value;
    return panierActuel.some(item => item.id === produit.id);
  }

  viderPanier(): void {
    this.panierSubject.next([]);
    this.sauvegarderPanier();
  }

  private sauvegarderPanier(): void {
    this.storage.set('panier', this.panierSubject.value);
  }
}
