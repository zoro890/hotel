import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ScreenComponent } from './screen/screen.component';
import { ForgetComponent } from './forget/forget.component';
import { NavigaterComponent } from './navigater/navigater.component';
import { OverviewComponent } from './overview/overview.component';
import { TaxiComponent } from './taxi/taxi.component';
import { DarkComponent } from './dark/dark.component';
import { Overview2Component } from './overview2/overview2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ScreenComponent,
    ForgetComponent,
    NavigaterComponent,
    OverviewComponent,
    TaxiComponent,
    DarkComponent,
    Overview2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
