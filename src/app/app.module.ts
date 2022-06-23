import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './src/app/home-page/home-page.component';
import { AdminLoginComponent } from './src/app/admin-login/admin-login.component';
import { UserLoginComponent } from './src/app/user-login/user-login.component';
import { AdminPageComponent } from './src/app/admin-page/admin-page.component';
import { UserPageComponent } from './src/app/user-page/user-page.component';
import { UserPage1Component } from './app/user-page1/user-page1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminLoginComponent,
    UserLoginComponent,
    AdminPageComponent,
    UserPageComponent,
    UserPage1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
