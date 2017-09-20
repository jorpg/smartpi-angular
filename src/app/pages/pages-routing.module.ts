import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 {
   path: '',
   redirectTo: 'login',
   pathMatch: 'full',
 },
 {
   path: 'login',
   component: LoginComponent,
 },
 {
   path: 'pages',
   component: PagesComponent,
   children: [
     {
       path: 'home',
       loadChildren: './home/home.module#HomeModule',
     },
     {
       path: 'operacion',
       loadChildren: './operacion/operacion.module#OperacionModule',
     },
     {
       path: 'alarmas',
       loadChildren: './alarmas/alarmas.module#AlarmasModule',
     },
     {
       path: 'auto-manual',
       loadChildren: './auto-manual/auto-manual.module#AutoManualModule',
     },
     {
       path: 'tendencia',
       loadChildren: './tendencia/tendencia.module#TendenciaModule',
     },
     {
       path: 'lo-pt',
       loadChildren: './lo-pt/lo-pt.module#LoPtModule',
     },
     {
       path: 'hi-pt',
       loadChildren: './hi-pt/hi-pt.module#HiPtModule',
     },
     {
       path: 'produccion',
       loadChildren: './produccion/produccion.module#ProduccionModule',
     },
   ]
 },
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class PagesRoutingModule { }
