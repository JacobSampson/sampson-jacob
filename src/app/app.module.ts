import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LandingModule } from './modules/landing/landing.module';
import { AboutModule } from './modules/about/about.module';
import { CareersModule } from './modules/careers/careers.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LandingModule,
    AboutModule,
    CareersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
