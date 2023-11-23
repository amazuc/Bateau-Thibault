import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this.router.navigate(['/delabrise'])
  }

  onGoToAquilon() {
    this.router.navigate(['/aquilon'])
  }

  onGoToGast() {
    this.router.navigate(['/gast'])
  }

  onGoToSaphir() {
    this.router.navigate(['/saphir'])
  }

}
