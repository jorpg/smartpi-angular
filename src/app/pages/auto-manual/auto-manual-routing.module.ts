import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoManualComponent } from './auto-manual.component';

const routes: Routes = [
  {
    path: '',
    component: AutoManualComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoManualRoutingModule { }
