import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/models/characters';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() character!: Result;
  constructor() { }

  ngOnInit(): void {
  }

}
