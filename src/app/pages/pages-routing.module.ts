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
   ]
 },
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class PagesRoutingModule { }
