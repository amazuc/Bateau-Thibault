import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomardPage } from './homard.page';

const routes: Routes = [
  {
    path: '',
    component: HomardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomardPageRoutingModule {}
