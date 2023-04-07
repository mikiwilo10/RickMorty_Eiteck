import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/characters';
import { PersonajesService } from 'src/app/service/personajes/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes: Result[] = [];
  public numeroPaginas: number = 0;
  public actualPagina: number = 1;

  constructor(
    private servicePersonaje: PersonajesService
  ) { }

  ngOnInit(): void {
    this.obtenerPersonajes()
  }

  siguientePagina() {
    this.actualPagina++;
    this.obtenerPersonajes()
  }

  anteriorPagina() {
    this.actualPagina--;
    this.obtenerPersonajes()
  }

  obtenerPersonajes() {
    this.servicePersonaje.obtenerPersonajes(this.actualPagina).subscribe(
      respuesta => {
        this.personajes = respuesta['results'];
        this.numeroPaginas = respuesta['info']['pages'];
      }
    )
  }



}
