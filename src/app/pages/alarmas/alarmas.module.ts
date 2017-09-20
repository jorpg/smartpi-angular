import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlarmasRoutingModule } from './alarmas-routing.module';
import { AlarmasComponent } from './alarmas.component';

@NgModule({
  imports: [
    CommonModule,
    AlarmasRoutingModule
  ],
  declarations: [AlarmasComponent]
})
export class AlarmasModule { }
