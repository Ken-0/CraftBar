import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { SucursalesComponent } from './sucursales/sucursales.component';

const routes: Routes = [
  { path: '', redirectTo: '/Inicio', pathMatch: 'full' }, // Ruta por defecto
  { path: 'Inicio', component: InicioComponent },
  { path: 'Alimentos', component: AlimentosComponent },
  { path: 'Bebidas', component: BebidasComponent },
  { path: 'Sucursales', component: SucursalesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
