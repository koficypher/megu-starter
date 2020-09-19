import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomePageModule) },
      {path: 'account', loadChildren: () => import('../account/account.module').then(m => m.AccountPageModule) },
      {path: 'support', loadChildren: () => import('../support/support.module').then(m => m.SupportPageModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
