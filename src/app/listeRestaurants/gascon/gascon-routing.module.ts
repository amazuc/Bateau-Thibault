import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GasconPage } from './gascon.page';

const routes: Routes = [
  {
    path: '',
    component: GasconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GasconPageRoutingModule {}
