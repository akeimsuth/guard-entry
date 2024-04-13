import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliverymanEntrySendNotificationPage } from './deliveryman-entry-send-notification.page';

const routes: Routes = [
  {
    path: '',
    component: DeliverymanEntrySendNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliverymanEntrySendNotificationPageRoutingModule {}
