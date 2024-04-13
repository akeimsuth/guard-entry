import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewMessagePageRoutingModule } from './new-message-routing.module';

import { NewMessagePage } from './new-message.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    NewMessagePageRoutingModule
  ],
  declarations: [NewMessagePage]
})
export class NewMessagePageModule {}
