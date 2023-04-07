import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'src/app/models/characters';
import { Characters } from 'src/app/models/characters';
import { PersonajesService } from 'src/app/service/personajes/personajes.service';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.css']
})
export class DetallePersonajeComponent implements OnInit {
  
  character!: Result;
  idPersonaje: any;

  constructor(
    private router:ActivatedRoute,
    private servicePersonaje: PersonajesService
  ) { }
  

  ngOnInit(): void {
    this.idPersonaje = this.router.snapshot.paramMap.get("id") ;
    this.servicePersonaje.obtenerDetallePersonaje(this.idPersonaje).subscribe(
      respuesta => {
        this.character= respuesta;
      }
    )
  }

}
