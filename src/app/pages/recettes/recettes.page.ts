import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

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
    let navigationExtras: NavigationExtras = {
      state :{
        data:"bar"
      }
    };
    this.router.navigate(['/info'], navigationExtras)
  }

  onGoToHomard() {
    let navigationExtras: NavigationExtras = {
      state :{
        data:"homard"
      }
    };
    this.router.navigate(['/info'], navigationExtras)
  }

  onGoToJacques() {
    let navigationExtras: NavigationExtras = {
      state :{
        data:"noix"
      }
    };
    this.router.navigate(['/info'], navigationExtras)
  }

  onGoToTourteau() {
    let navigationExtras: NavigationExtras = {
      state :{
        data:"linguine"
      }
    };
    this.router.navigate(['/info'], navigationExtras)
  }

  onGoToRecette() {
    let navigationExtras: NavigationExtras = {
      state :{
        data:"recette"
      }
    };
    this.router.navigate(['/info'], navigationExtras)
  }
}
