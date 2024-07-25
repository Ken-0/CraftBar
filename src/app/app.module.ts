import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importa tu módulo de enrutamiento
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { SucursalesComponent } from './sucursales/sucursales.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AlimentosComponent,
    BebidasComponent,
    SucursalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Asegúrate de que AppRoutingModule está en los imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
