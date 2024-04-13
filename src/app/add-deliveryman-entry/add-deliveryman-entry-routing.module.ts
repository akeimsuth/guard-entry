import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDeliverymanEntryPage } from './add-deliveryman-entry.page';

const routes: Routes = [
  {
    path: '',
    component: AddDeliverymanEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDeliverymanEntryPageRoutingModule {}
