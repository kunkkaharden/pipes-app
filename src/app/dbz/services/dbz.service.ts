import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
  constructor(){
  }

  private _personajes :Personaje[] = [
    {
      nombre: 'A',
      poder: 0,
    },
    {
      nombre: 'b',
      poder: 0,
    }
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  agregarPersonaje(personaje: Personaje): void {
    this._personajes.push(personaje);
  }

}
