import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    title: 'SPED Fácil',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/landing-page/login/login.component').then(m => m.LoginComponent)
      },
      
      {
        path: 'register',
        loadComponent: () => import('./pages/landing-page/register/register.component').then(m => m.RegisterComponent)
      },
      
      // {
      //   path: '',
      //   redirectTo: 'login',
      //   pathMatch: 'full'
      // }
    ]
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component'),
    canActivate: [authGuard],
    title: 'Painel de Controle'
  }
];
