import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabReportPageRoutingModule } from './tab-report-routing.module';

import { TabReportPage } from './tab-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabReportPageRoutingModule
  ],
  declarations: [TabReportPage]
})
export class TabReportPageModule {}
