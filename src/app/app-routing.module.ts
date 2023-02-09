import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { RegistrationComponent } from './registration/registration.component';
import { LessorComponent } from './lessor/lessor.component';
import { TenantComponent } from './tenant/tenant.component';



const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: '' , redirectTo: 'home' , pathMatch: 'full'},
  {path: 'page1' , component: Page1Component},
  {path: '' , redirectTo: 'home' , pathMatch: 'full'},
  {path: 'page2' , component: Page2Component},
  {path: '' , redirectTo: 'home' , pathMatch: 'full'},
  {path: 'registration' , component: RegistrationComponent},
  {path: '' , redirectTo: 'home' , pathMatch: 'full'},
  {path: 'lessor' , component: LessorComponent},
  {path: '' , redirectTo: 'lessor' , pathMatch: 'full'},
  {path: 'tenant' , component: TenantComponent},
  {path: '' , redirectTo: 'tenant' , pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
