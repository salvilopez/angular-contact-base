import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './views/list/list.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ContactComponent,
    LoginFormComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // We import HttpClientModule to perform http requests
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
