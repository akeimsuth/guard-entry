import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreApproveEntryPage } from './pre-approve-entry.page';

const routes: Routes = [
  {
    path: '',
    component: PreApproveEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreApproveEntryPageRoutingModule {}
