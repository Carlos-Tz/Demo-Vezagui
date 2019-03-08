import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GaugeChartComponent } from 'angular-gauge-chart';
import { SignaturePadModule } from 'angular2-signaturepad';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewSurveyComponent } from './components/new-survey/new-survey.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NewSurveyComponent,
    DashboardComponent,
    GaugeChartComponent
  ],
  imports: [
    BrowserModule,
    SignaturePadModule,   
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
