import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountriesComponent } from './components/countries/countries.component';
import {HttpClientModule} from '@angular/common/http';
import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';

import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
    DashboardCardComponent,
    Ng2GoogleChartsModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
