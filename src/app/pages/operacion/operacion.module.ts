import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperacionRoutingModule } from './operacion-routing.module';
import { OperacionComponent } from './operacion.component';

@NgModule({
  imports: [
    CommonModule,
    OperacionRoutingModule
  ],
  declarations: [OperacionComponent]
})
export class OperacionModule { }
