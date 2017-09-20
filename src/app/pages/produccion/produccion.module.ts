import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduccionRoutingModule } from './produccion-routing.module';
import { ProduccionComponent } from './produccion.component';

@NgModule({
  imports: [
    CommonModule,
    ProduccionRoutingModule
  ],
  declarations: [ProduccionComponent]
})
export class ProduccionModule { }
