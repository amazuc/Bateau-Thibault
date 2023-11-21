import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailProduitsPage } from './detail-produits.page';

const routes: Routes = [
  {
    path: '',
    component: DetailProduitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailProduitsPageRoutingModule {}
