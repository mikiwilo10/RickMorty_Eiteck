import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajeCardComponent } from './personaje-card/personaje-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';

import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    PersonajeCardComponent,
    NavbarComponent,
    SearchComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PersonajeCardComponent,
    NavbarComponent,
    SearchComponent,
    CardComponent

  ]

})
export class SharedModule { }
