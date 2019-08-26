import { Routes } from '@angular/router';
import {importExpr} from '@angular/compiler/src/output/output_ast';

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('../../page/home/home.module')
      .then(mod => mod.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../../page/home/home.module')
      .then(mod => mod.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('../../page/about/about.module')
      .then(mod => mod.AboutModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../../page/dashboard/dashboard.module')
      .then(mod => mod.DashboardModule)
  }
];
