import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddServicemanEntryPage } from './add-serviceman-entry.page';

const routes: Routes = [
  {
    path: '',
    component: AddServicemanEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddServicemanEntryPageRoutingModule {}
