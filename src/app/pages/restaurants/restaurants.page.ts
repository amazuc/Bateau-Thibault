import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onGoToFous() {
    let navigationExtras: NavigationExtras = {
      state :{
        data:"fou"
      }
    };
    this.router.navigate(['/info'], navigationExtras)
  }

  onGoToGascon() {
    let navigationExtras: NavigationExtras = {
      state :{
        data:"gascons"
      }
    };
    this.router.navigate(['/info'], navigationExtras)
  }

  onGoToLandais() {
    let navigationExtras: NavigationExtras = {
      state :{
        data:"landais"
      }
    };
    this.router.navigate(['/info'], navigationExtras)
  }

  onGoToSommelier() {
    let navigationExtras: NavigationExtras = {
      state :{
        data:"sommelier"
      }
    };
    this.router.navigate(['/info'], navigationExtras)
  }

  onGoToVilla() {
    let navigationExtras: NavigationExtras = {
      state :{
        data:"villa"
      }
    };
    this.router.navigate(['/info'], navigationExtras)
  }

  onGoToContact() {
    this.router.navigate(['/contact'])
  }

}
