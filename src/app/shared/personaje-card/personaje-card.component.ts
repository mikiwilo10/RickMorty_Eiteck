import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/models/characters';

@Component({
  selector: 'app-personaje-card',
  templateUrl: './personaje-card.component.html',
  styleUrls: ['./personaje-card.component.css']
})
export class PersonajeCardComponent implements OnInit {

  @Input() personajes: Result[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
