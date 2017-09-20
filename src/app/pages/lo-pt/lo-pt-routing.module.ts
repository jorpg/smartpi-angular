import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoPtComponent } from './lo-pt.component';

const routes: Routes = [
  {
    path: '',
    component: LoPtComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoPtRoutingModule { }
