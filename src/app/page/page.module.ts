import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PersonajesComponent } from './personajes/personajes.component';
import { DetallePersonajeComponent } from './detalle-personaje/detalle-personaje.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PersonajesComponent,
    DetallePersonajeComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule
  ],
  exports:[
    PersonajesComponent
  ]
})
export class PageModule { }
