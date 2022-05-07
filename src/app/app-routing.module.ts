import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './reports/reports.component';
import { OverviewComponent } from './overview/overview.component';
import { Home2Component } from './home2/home2.component';
import { SafeComponent } from './safe/safe.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:"Reports",component:HomeComponent},
  {path:"overview",component:OverviewComponent},
  {path:"details/:country" , component:DetailsComponent},
  {path:"home", component:Home2Component , children:[

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
