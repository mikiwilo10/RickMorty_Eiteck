import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public search: string = '';
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;
  @Input() placeholder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  
  constructor(
  ) { }

  ngOnInit(): void {
  }

  onSearch() {
    const valor = this.txtSearch.nativeElement.value;
    this.search = valor;
    if (valor.trim().length === 0) {
      return;
    }
    this.onEnter.emit(this.search);
    this.txtSearch.nativeElement.value = '';
  }
}
