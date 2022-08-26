import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    NumerosComponent,
    BasicosComponent,
    OrdenarComponent,
    NoComunesComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports: [
    NumerosComponent,
    BasicosComponent,
    OrdenarComponent,
    NoComunesComponent
  ]
})
export class VentasModule { }
