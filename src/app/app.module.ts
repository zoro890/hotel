import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { ScreenComponent } from './screen/screen.component';
import { ForgetComponent } from './forget/forget.component';
import { NavigaterComponent } from './navigater/navigater.component';
import { OverviewComponent } from './overview/overview.component';
import { DarkComponent } from './dark/dark.component';
import { Overview2Component } from './overview2/overview2.component';
import { CheckSComponent } from './check-s/check-s.component';
import { DownnavComponent } from './downnav/downnav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodComponent } from './food/food.component';
import { FoodResturantComponent } from './food-resturant/food-resturant.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    NavigaterComponent,
    OverviewComponent,
    DarkComponent,
    Overview2Component,
    CheckSComponent,
    DownnavComponent,
    FoodComponent,
    FoodResturantComponent,
    FooterComponent,
    EventsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
