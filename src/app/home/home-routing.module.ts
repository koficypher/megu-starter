import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      { path: 'timeline', loadChildren: () => import('../timeline/timeline.module').then(m => m.TimelinePageModule)},
      { path: 'map', loadChildren: () => import('../map/map.module').then(m => m.MapPageModule)},
      { path: 'profile', loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)},
      { path: 'about', loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)}
    ]
  },
  {path: '', redirectTo: 'home/timeline', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
