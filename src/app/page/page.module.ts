import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PersonajesComponent } from './personajes/personajes.component';
import { DetallePersonajeComponent } from './detalle-personaje/detalle-personaje.component';
import { BusquedaPersonajeComponent } from './busqueda-personaje/busqueda-personaje.component';


@NgModule({
  declarations: [
    PersonajesComponent,
    DetallePersonajeComponent,
    BusquedaPersonajeComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
  ],
  exports:[
    PersonajesComponent
  ]
})
export class PageModule { }
