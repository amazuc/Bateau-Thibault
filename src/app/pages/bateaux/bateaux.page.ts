import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onGoToContact() {
    this.router.navigate(['/contact'])
  }

  onGoToBrise() {
    let navigationExtras: NavigationExtras = {
      state :{
        data:"brise"
      }
    };
    this.router.navigate(['/info'], navigationExtras)
  }

  onGoToAquilon() {
    let navigationExtras: NavigationExtras = {
      state :{
        data:"aquilon"
      }
    };
    this.router.navigate(['/info'], navigationExtras)
  }

  onGoToGast() {
    let navigationExtras: NavigationExtras = {
      state :{
        data:"gast"
      }
    };
    this.router.navigate(['/info'], navigationExtras)
  }

  onGoToSaphir() {
    let navigationExtras: NavigationExtras = {
      state :{
        data:"saphir"
      }
    };
    this.router.navigate(['/info'], navigationExtras)
  }

}
