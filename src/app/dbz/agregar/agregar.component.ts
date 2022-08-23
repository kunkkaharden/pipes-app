import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  constructor(private dbzService: DbzService) {}

  @Input()
  personajes: Personaje[] = [];
  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
   }


  agregar() {
    if (this.nuevo.nombre.trim().length === 0 ) {
      return;
    }
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    }
  }

}
