import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this.router.navigate(['/fous'])
  }

  onGoToGascon() {
    this.router.navigate(['/gascon'])
  }

  onGoToLandais() {
    this.router.navigate(['/landais'])
  }

  onGoToSommelier() {
    this.router.navigate(['/sommelier'])
  }

  onGoToVilla() {
    this.router.navigate(['/villa'])
  }

  onGoToContact() {
    this.router.navigate(['/contact'])
  }

}
