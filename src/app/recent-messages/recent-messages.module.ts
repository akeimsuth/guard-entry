import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecentMessagesPageRoutingModule } from './recent-messages-routing.module';

import { RecentMessagesPage } from './recent-messages.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RecentMessagesPageRoutingModule
  ],
  declarations: [RecentMessagesPage]
})
export class RecentMessagesPageModule {}
