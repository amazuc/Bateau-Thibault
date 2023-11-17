import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }



  onGoToBar() {
    this.router.navigate(['/bar'])
  }

  onGoToHomard() {
    this.router.navigate(['/homard'])
  }

  onGoToJacques() {
    this.router.navigate(['/jacques'])
  }

  onGoToTourteau() {
    this.router.navigate(['/tourteau'])
  }

  onGoToRecette() {
    this.router.navigate(['/recette'])
  }
}
