import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Juego2Component } from './juego2/juego2.component';
import { Juego3Component } from './juego3/juego3.component';
import { Juego1Component } from './juego1/juego1.component';
import { InicioComponent } from './inicio/inicio.component';
import { DownloadXmlComponent } from './download-xml/download-xml.component';

@NgModule({
  declarations: [
    AppComponent,
    Juego2Component,
    Juego3Component,
    Juego1Component,
    InicioComponent,
    DownloadXmlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
