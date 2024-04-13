import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddGuestEntryPageRoutingModule } from './add-guest-entry-routing.module';

import { AddGuestEntryPage } from './add-guest-entry.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AddGuestEntryPageRoutingModule
  ],
  declarations: [AddGuestEntryPage]
})
export class AddGuestEntryPageModule {}
