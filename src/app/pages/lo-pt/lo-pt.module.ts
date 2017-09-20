import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoPtRoutingModule } from './lo-pt-routing.module';
import { LoPtComponent } from './lo-pt.component';

@NgModule({
  imports: [
    CommonModule,
    LoPtRoutingModule
  ],
  declarations: [LoPtComponent]
})
export class LoPtModule { }
