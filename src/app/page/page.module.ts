import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PersonajesComponent } from './personajes/personajes.component';


@NgModule({
  declarations: [
    PersonajesComponent
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
