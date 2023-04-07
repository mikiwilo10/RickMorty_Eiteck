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

  // @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSearch() {
    const valor = this.txtSearch.nativeElement.value;
    this.search = valor;
    if (valor.trim().length === 0) {
      return;
    }
    this.router.navigate(['/busqueda'], {
      queryParams: { parametro: valor  },
    })
    this.txtSearch.nativeElement.value = '';
  }
}
