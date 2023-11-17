import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DelabrisePage } from './delabrise.page';

const routes: Routes = [
  {
    path: '',
    component: DelabrisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DelabrisePageRoutingModule {}
