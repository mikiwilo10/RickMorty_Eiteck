import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { Result } from 'src/app/models/characters';
import { PersonajesService } from 'src/app/service/personajes/personajes.service';

@Component({
  selector: 'app-busqueda-personaje',
  templateUrl: './busqueda-personaje.component.html',
  styleUrls: ['./busqueda-personaje.component.css']
})
export class BusquedaPersonajeComponent implements OnInit {
  private query: any;
  personajes: Result[] = [];

  busqueda: any = '';
  constructor(
    private router: ActivatedRoute,
    private servicePersonaje: PersonajesService
  ) { }

  ngOnInit(): void {
    this.busqueda = this.router.snapshot.queryParamMap
      .get("parametro");
    this.obtenerPersonajes(this.busqueda)
  }


  obtenerPersonajes(busqueda: string) {
    this.servicePersonaje.bsquedaPersonaje(busqueda).subscribe(
      respuesta => {
        this.personajes = respuesta['results'];
      }
    )
  }
}
