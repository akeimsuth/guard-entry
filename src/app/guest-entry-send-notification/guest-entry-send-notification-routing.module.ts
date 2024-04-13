import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestEntrySendNotificationPage } from './guest-entry-send-notification.page';

const routes: Routes = [
  {
    path: '',
    component: GuestEntrySendNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestEntrySendNotificationPageRoutingModule {}
