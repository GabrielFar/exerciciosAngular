import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"; 
import { CommonModule } from '@angular/common';

import { AutentificacaoComponent } from "./autentificacao/autentificacao.component";
import { ContatoComponent } from "./pages/contato/contato.component";
import { Error404Component } from "./pages/error404/error404.component";
import { HomeComponent } from "./pages/home/home.component";
import { AuthGuard } from "./services/auth/auth.guard";

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]}, 
  {path: 'login', component: AutentificacaoComponent},
  {path: 'contato', component: ContatoComponent, canActivate: [AuthGuard]},
  {path: '**', component: Error404Component}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
