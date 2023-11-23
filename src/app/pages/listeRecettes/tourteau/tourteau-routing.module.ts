import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourteauPage } from './tourteau.page';

const routes: Routes = [
  {
    path: '',
    component: TourteauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourteauPageRoutingModule {}
