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

  personajes: Result[]=[];
  private numeroPagina:number=2;
  constructor(
    private servicePersonaje:PersonajesService
  ) { }

  ngOnInit(): void {
    
      // this.servicePersonaje.obtenerPersonajes().subscribe(console.log)
      this.servicePersonaje.obtenerPersonajes(this.numeroPagina).subscribe( 
        respuesta => {
          this.personajes = respuesta['results'];
          console.log(respuesta)
        }
      )
     
  }

}
