import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//loacale
import localeEs from '@angular/common/locales/es';
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData} from '@angular/common';
registerLocaleData(localeEs);
registerLocaleData(localeRu);
@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    VentasModule,
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
