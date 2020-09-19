import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule)},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)},
  {
    path: 'onboard',
    loadChildren: () => import('./onboard/onboard.module').then( m => m.OnboardPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
