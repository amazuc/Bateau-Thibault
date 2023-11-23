import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  onGoToHome() {
    this.router.navigate(['/home'], { replaceUrl: true })
  }

  onGoToPanier(){
    this.router.navigate(['/panier'], { replaceUrl: true })
  }

}
