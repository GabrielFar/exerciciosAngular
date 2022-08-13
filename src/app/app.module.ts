import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AutentificacaoComponent } from './autentificacao/autentificacao.component';

@NgModule({
  declarations: [
    AppComponent,
    AutentificacaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
