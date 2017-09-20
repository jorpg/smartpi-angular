import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TendenciaRoutingModule } from './tendencia-routing.module';
import { TendenciaComponent } from './tendencia.component';

@NgModule({
  imports: [
    CommonModule,
    TendenciaRoutingModule
  ],
  declarations: [TendenciaComponent]
})
export class TendenciaModule { }
