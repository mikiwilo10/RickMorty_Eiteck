import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajeCardComponent } from './personaje-card/personaje-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    PersonajeCardComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonajeCardComponent,
    NavbarComponent,
    SearchComponent

  ]

})
export class SharedModule { }
