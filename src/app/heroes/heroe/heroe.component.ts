import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
  nombre: string = "A";
  edad: number =0;
  obtenerNombre(): string{
    return `${this.nombre} - ${this.edad}`
  }

  cambiarNombre():void{
    this.nombre = 'B';
  }

  cambiarEdad():void{
    this.edad = 1;
  }
}
