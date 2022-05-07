import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './reports/reports.component';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './footer/footer.component';
import { Home2Component } from './home2/home2.component';
import { SafeComponent } from './safe/safe.component';
import { MonitorComponent } from './monitor/monitor.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OverviewComponent,
    DetailsComponent,
    FooterComponent,
    Home2Component,
    SafeComponent,
    MonitorComponent,
    DoctorComponent,
  ]
,
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
