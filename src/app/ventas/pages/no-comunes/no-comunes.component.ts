import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {
  //Select
  persona = {nombre: 'A', genero: 'm'};
   personas = [{nombre: 'A', genero: 'm'},{nombre: 'B', genero: 'f'}];
  invitacionMap= {
    'm': 'invitarlo',
    'f': 'invitarla',
  }
   cambiarPersona(){
    if (this.persona.nombre !== this.personas[0].nombre){
        this.persona =  this.personas[0];
    }else {
       this.persona =  this.personas[1];
    }
   }
  //Plural
  clientes: string[] = ['erpp','etc','duhas','duhastmitch'];
  clientesMap = {
    '=0' : 'no tenemos ningun cliente esperando',
    '=1' : ' tenemos un cliente esperando',
    'other' : ' tenemos # clientes esperando',
  };
  eliminarCliente(){
    this.clientes.pop();
  }
// key value

persona2 = {
  nombre: 'Fernando',
  edad: 35,
  direccion: 'Canada'

}
//Async
miObservable = interval(1000);
promesa = new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve('fin');
  }, 5000);
});
  constructor() { }

  ngOnInit(): void {
  }

}
