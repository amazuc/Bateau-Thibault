import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaphirPage } from './saphir.page';

const routes: Routes = [
  {
    path: '',
    component: SaphirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaphirPageRoutingModule {}
