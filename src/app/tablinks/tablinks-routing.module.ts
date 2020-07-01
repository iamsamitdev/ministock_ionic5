import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
      {
        path: 'tab-home',
        loadChildren: () => import('../tabpages/tab-home/tab-home.module').then( m => m.TabHomePageModule)
      },
      {
        path: 'tab-report',
        loadChildren: () => import('../tabpages/tab-report/tab-report.module').then( m => m.TabReportPageModule)
      },
      {
        path: 'tab-notification',
        loadChildren: () => import('../tabpages/tab-notification/tab-notification.module').then( m => m.TabNotificationPageModule)
      },
      {
        path: 'tab-setting',
        loadChildren: () => import('../tabpages/tab-setting/tab-setting.module').then( m => m.TabSettingPageModule)
      },
      {
        path: 'tab-account',
        loadChildren: () => import('../tabpages/tab-account/tab-account.module').then( m => m.TabAccountPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tablinks/tab-home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
