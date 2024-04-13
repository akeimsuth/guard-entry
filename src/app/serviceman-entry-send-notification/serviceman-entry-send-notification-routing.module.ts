import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicemanEntrySendNotificationPage } from './serviceman-entry-send-notification.page';

const routes: Routes = [
  {
    path: '',
    component: ServicemanEntrySendNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicemanEntrySendNotificationPageRoutingModule {}
