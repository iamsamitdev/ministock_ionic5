import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabReportPage } from './tab-report.page';

const routes: Routes = [
  {
    path: '',
    component: TabReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabReportPageRoutingModule {}
