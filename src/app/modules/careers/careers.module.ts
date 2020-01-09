import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersComponent } from './pages/careers/careers.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CareersComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CareersComponent
  ]
})
export class CareersModule { }
