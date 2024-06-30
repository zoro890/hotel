import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { ScreenComponent } from './screen/screen.component';
import { ForgetComponent } from './forget/forget.component';
import { HomeComponent } from './home/home.component';
import { NavigaterComponent } from './navigater/navigater.component';
import { OverviewComponent } from './overview/overview.component';
// import { TaxiComponent } from './taxi/taxi.component';
import { DarkComponent } from './dark/dark.component';
import { Overview2Component } from './overview2/overview2.component';
import { CheckSComponent } from './check-s/check-s.component';
import { DownnavComponent } from './downnav/downnav.component';
import { FoodComponent } from './food/food.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"forget",
    component:ForgetComponent
  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"navigate",
    component:NavigaterComponent
  },
  {
    path:"overview",
    component:OverviewComponent
  },
  
  {
    path:"dark",
    component:DarkComponent
  },
  {
    path:"overview2",
    component:Overview2Component
  },
  {
    path:"check",
    component:CheckSComponent
  },
  {
    path:"down",
    component:DownnavComponent
  },
  {
    path:"food",
    component:FoodComponent
  },
  {
    path:"events",
    component:EventsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
