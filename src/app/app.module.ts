import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LandingModule } from './modules/landing/landing.module';
import { AboutModule } from './modules/about/about.module';
import { CareersModule } from './modules/careers/careers.module';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    SharedModule,
    LandingModule,
    AboutModule,
    CareersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
