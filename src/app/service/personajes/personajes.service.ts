import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Characters } from 'src/app/models/characters';
import { environment } from 'src/environments/environment';

const base_url: String = environment.characters;


@Injectable({
  providedIn: 'root'
})


export class PersonajesService {

  constructor(
    private servicePersonajes:HttpClient
  ) { }


  obtenerPersonajes(numeroPagina:number){
    return this.servicePersonajes.get<Characters>(`${base_url}/?page=${numeroPagina}`);
  }

}
