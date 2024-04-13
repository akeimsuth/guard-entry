import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCabEntryPage } from './add-cab-entry.page';

const routes: Routes = [
  {
    path: '',
    component: AddCabEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCabEntryPageRoutingModule {}
