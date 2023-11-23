import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AquilonPage } from './aquilon.page';

const routes: Routes = [
  {
    path: '',
    component: AquilonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AquilonPageRoutingModule {}
