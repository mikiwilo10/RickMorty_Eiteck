import { HttpClient } from '@angular/common/http';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Result } from 'src/app/models/characters';
import { PersonajesService } from 'src/app/service/personajes/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonajesComponent implements OnInit {

  public personajes: Result[] = [];
  public numeroPaginas: number = 0;
  public actualPagina: number = 1;
  public error: boolean=false ;
  public busquedaView: boolean=true ;

  constructor(
    private servicePersonaje: PersonajesService,
    private cd: ChangeDetectorRef

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
    this.busquedaView=true;

    this.servicePersonaje.obtenerPersonajes(this.actualPagina).subscribe(
      respuesta => {
        this.personajes = respuesta['results'];
        this.numeroPaginas = respuesta['info']['pages'];
        this.cd.markForCheck();
      }
    )
  }


  buscarPersonajes(busqueda: string) {
    this.busquedaView=false;
    this.servicePersonaje.bsquedaPersonaje(busqueda).subscribe(
      respuesta => {
        this.personajes = respuesta['results'];
        this.cd.markForCheck();
      },
      error => {
        this.error=true;
      },
    )
  }


}
