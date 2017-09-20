import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TendenciaComponent } from './tendencia.component';

const routes: Routes = [
  {
    path: '',
    component: TendenciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TendenciaRoutingModule { }
