import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {FormsModule} from '@angular/forms';
import { LayoutPublicComponent } from './layout/layout-public/layout-public.component';
import { LayoutBaseComponent } from './layout/layout-base/layout-base.component';
import { NavigationComponent } from './shared/component/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    LayoutPublicComponent,
    LayoutBaseComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
