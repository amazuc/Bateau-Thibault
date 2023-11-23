import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onGoToHome() {
    this.router.navigate(['./home'])
  }

  onGoToDetail(idProduit: number) {
    this.router.navigate(['/produit/' + idProduit])
  }
}
