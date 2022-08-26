import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{

  constructor(private primeNgCongig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primeNgCongig.ripple = true;
  }
}
