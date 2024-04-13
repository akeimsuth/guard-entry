import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreApproveEntryPageRoutingModule } from './pre-approve-entry-routing.module';

import { PreApproveEntryPage } from './pre-approve-entry.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PreApproveEntryPageRoutingModule
  ],
  declarations: [PreApproveEntryPage]
})
export class PreApproveEntryPageModule {}
