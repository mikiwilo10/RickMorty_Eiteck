import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './personajes/personajes.component';
import { DetallePersonajeComponent } from './detalle-personaje/detalle-personaje.component';
import { BusquedaPersonajeComponent } from './busqueda-personaje/busqueda-personaje.component';

const routes: Routes = [
  { path: 'personajes', component: PersonajesComponent },
  { path: 'detalle/:id', component: DetallePersonajeComponent },
  { path: 'busqueda', component: BusquedaPersonajeComponent },
  { path: '', redirectTo: 'personajes', pathMatch: 'full' },
  { path: '**', redirectTo: 'personajes' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
