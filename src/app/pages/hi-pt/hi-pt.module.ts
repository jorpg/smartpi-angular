import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HiPtRoutingModule } from './hi-pt-routing.module';
import { HiPtComponent } from './hi-pt.component';

@NgModule({
  imports: [
    CommonModule,
    HiPtRoutingModule
  ],
  declarations: [HiPtComponent]
})
export class HiPtModule { }
