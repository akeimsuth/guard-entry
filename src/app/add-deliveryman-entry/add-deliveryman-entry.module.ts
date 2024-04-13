import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDeliverymanEntryPageRoutingModule } from './add-deliveryman-entry-routing.module';

import { AddDeliverymanEntryPage } from './add-deliveryman-entry.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AddDeliverymanEntryPageRoutingModule
  ],
  declarations: [AddDeliverymanEntryPage]
})
export class AddDeliverymanEntryPageModule {}
