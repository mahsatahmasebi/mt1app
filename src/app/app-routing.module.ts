import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './auth/signup/signup.component';
import {LayoutPublicComponent} from './layout/layout-public/layout-public.component';
import {PUBLIC_ROUTES} from './layout/layout-public/layout-public.routes';
import {LayoutBaseComponent} from './layout/layout-base/layout-base.component';
import {BASE_ROUTES} from './layout/layout-base/layout-base.routes';


const routes: Routes = [
  {path: '', component: LayoutPublicComponent, children: PUBLIC_ROUTES},
  {path: '', component: LayoutBaseComponent, children: BASE_ROUTES},
  {path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
