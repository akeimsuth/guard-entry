import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliverymanEntrySendNotificationPageRoutingModule } from './deliveryman-entry-send-notification-routing.module';

import { DeliverymanEntrySendNotificationPage } from './deliveryman-entry-send-notification.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DeliverymanEntrySendNotificationPageRoutingModule
  ],
  declarations: [DeliverymanEntrySendNotificationPage]
})
export class DeliverymanEntrySendNotificationPageModule {}
