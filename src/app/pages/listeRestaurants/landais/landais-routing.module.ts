import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandaisPage } from './landais.page';

const routes: Routes = [
  {
    path: '',
    component: LandaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandaisPageRoutingModule {}
