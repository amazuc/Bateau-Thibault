import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationProduitPage } from './information-produit.page';

const routes: Routes = [
  {
    path: '',
    component: InformationProduitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationProduitPageRoutingModule {}
