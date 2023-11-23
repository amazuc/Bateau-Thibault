import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FousPage } from './fous.page';

const routes: Routes = [
  {
    path: '',
    component: FousPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FousPageRoutingModule {}
