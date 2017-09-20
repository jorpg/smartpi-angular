import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoManualRoutingModule } from './auto-manual-routing.module';
import { AutoManualComponent } from './auto-manual.component';

@NgModule({
  imports: [
    CommonModule,
    AutoManualRoutingModule
  ],
  declarations: [AutoManualComponent]
})
export class AutoManualModule { }
