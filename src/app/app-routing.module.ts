import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Juego1Component } from './juego1/juego1.component'; 
import { Juego2Component } from './juego2/juego2.component'; 
import {Juego3Component}  from './juego3/juego3.component'; 
import {InicioComponent}  from './inicio/inicio.component'; 
import { DownloadXmlComponent } from './download-xml/download-xml.component';

const routes: Routes = [
  {path: '', redirectTo: '/juegos', pathMatch: 'full'},
  {path: 'juegos', component: InicioComponent},
    { path: 'juegos/ocarina-of-time', component: Juego1Component},
    { path: 'juegos/breath-of-the-wild', component: Juego2Component},
    { path: 'juegos/tears-of-the-kingdom', component: Juego3Component},
    { path: 'juegos/download-xml', component: DownloadXmlComponent }

   ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
