import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JacquesPage } from './jacques.page';

const routes: Routes = [
  {
    path: '',
    component: JacquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JacquesPageRoutingModule {}
