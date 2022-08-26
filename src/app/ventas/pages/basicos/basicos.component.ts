import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'erpp';
  nombreUpper: string = 'ERPP';
  nombreCompleto: string = 'ErPp';
  fecha: Date = new Date();
  constructor() {
    setInterval(()=>{
      this.fecha = new Date();
    },1000);
  }

}
