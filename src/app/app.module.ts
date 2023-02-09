import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { RegistrationComponent } from './registration/registration.component';
import { TenantComponent } from './tenant/tenant.component';
import { LessorComponent } from './lessor/lessor.component';
import { UtilityPaymentsComponent } from './utility-payments/utility-payments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    RegistrationComponent,
    TenantComponent,
    LessorComponent,
    UtilityPaymentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
