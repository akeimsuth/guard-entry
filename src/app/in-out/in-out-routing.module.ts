import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InOutPage } from './in-out.page';

const routes: Routes = [
  {
    path: '',
    component: InOutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InOutPageRoutingModule {}