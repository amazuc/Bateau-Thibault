import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Produit } from '../../interfaces/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  private apiUrl = 'http://51.255.166.155:1352/tig/products';

  constructor(private http: HttpClient) { }

  getProduits(idProduit: number): Observable<any> {
    if (idProduit !== 3) {
      return this.http.get<Produit[]>(this.apiUrl).pipe(
        map((produits: Produit[]) => produits.filter(produit => produit.category === idProduit)
        .map(produit => ({ ...produit, quantite: 1 })))
      );
    }
    else {
      return this.http.get<Produit[]>(this.apiUrl).pipe(
        map((produits: Produit[]) => produits.filter(produit => produit.discount !== 0)
        .map(produit => ({ ...produit, quantite: 1 })))
      );
    }
  }

  getDescription(id: number){
     return this.http.get<{description:string}>('assets/description/'+id+'.json')
  }
}