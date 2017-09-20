import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperacionComponent } from './operacion.component';

const routes: Routes = [
  {
    path: '',
    component: OperacionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperacionRoutingModule { }
