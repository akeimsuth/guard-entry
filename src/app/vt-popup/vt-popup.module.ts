import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VtPopupPageRoutingModule } from './vt-popup-routing.module';

import { VtPopupPage } from './vt-popup.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    VtPopupPageRoutingModule
  ],
  declarations: [VtPopupPage]
})
export class VtPopupPageModule {}
