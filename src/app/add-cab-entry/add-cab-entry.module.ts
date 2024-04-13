import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCabEntryPageRoutingModule } from './add-cab-entry-routing.module';

import { AddCabEntryPage } from './add-cab-entry.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AddCabEntryPageRoutingModule
  ],
  declarations: [AddCabEntryPage]
})
export class AddCabEntryPageModule {}
