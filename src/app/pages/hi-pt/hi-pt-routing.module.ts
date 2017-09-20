import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HiPtComponent } from './hi-pt.component';

const routes: Routes = [
  {
    path: '',
    component: HiPtComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HiPtRoutingModule { }
