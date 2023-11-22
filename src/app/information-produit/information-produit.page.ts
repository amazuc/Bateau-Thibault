import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitsService } from '../services/produit/produits.service';
import { Produit } from '../interfaces/produit';

@Component({
  selector: 'app-information-produit',
  templateUrl: './information-produit.page.html',
  styleUrls: ['./information-produit.page.scss'],
})
export class InformationProduitPage implements OnInit {

  produit!: Produit
  description: string = ""
  image: string = ""

  constructor(private router: Router, private produitService: ProduitsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      if (this.router.getCurrentNavigation()?.extras.state){
        this.produit = this.router.getCurrentNavigation()?.
          extras.state?.['produit'];
      }
    })
      this.produitService.getDescription(this.produit.id).subscribe((data) => {
      this.description = data.description
     
    });
    this.image = "assets/information/"+this.produit.id+".jpeg"
  }

  onGoBack(){
    this.router.navigate(['/produit/' + this.produit.category])
  }

}
