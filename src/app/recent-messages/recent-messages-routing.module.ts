import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecentMessagesPage } from './recent-messages.page';

const routes: Routes = [
  {
    path: '',
    component: RecentMessagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecentMessagesPageRoutingModule {}
