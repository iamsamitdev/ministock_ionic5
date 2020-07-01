import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabSettingPageRoutingModule } from './tab-setting-routing.module';

import { TabSettingPage } from './tab-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabSettingPageRoutingModule
  ],
  declarations: [TabSettingPage]
})
export class TabSettingPageModule {}
