import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './pages/landing/landing.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }
