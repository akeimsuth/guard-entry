import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddServicemanEntryPageRoutingModule } from './add-serviceman-entry-routing.module';

import { AddServicemanEntryPage } from './add-serviceman-entry.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AddServicemanEntryPageRoutingModule
  ],
  declarations: [AddServicemanEntryPage]
})
export class AddServicemanEntryPageModule {}
