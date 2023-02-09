import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { UtilityPaymentsComponent } from './utility-payments/utility-payments.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: '' , redirectTo: 'home' , pathMatch: 'full'},
  {path: 'page1' , component: Page1Component},
  {path: 'page2' , component: Page2Component},
  {path: 'utility-payments' , component: UtilityPaymentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
