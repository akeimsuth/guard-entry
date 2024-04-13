import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicemanEntrySendNotificationPageRoutingModule } from './serviceman-entry-send-notification-routing.module';

import { ServicemanEntrySendNotificationPage } from './serviceman-entry-send-notification.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ServicemanEntrySendNotificationPageRoutingModule
  ],
  declarations: [ServicemanEntrySendNotificationPage]
})
export class ServicemanEntrySendNotificationPageModule {}
