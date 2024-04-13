import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InOutPageRoutingModule } from './in-out-routing.module';

import { InOutPage } from './in-out.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    InOutPageRoutingModule
  ],
  declarations: [InOutPage]
})
export class InOutPageModule {}
