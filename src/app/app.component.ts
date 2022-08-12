import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProject';
  Titulo: string = ""

  public salvarDado(){
    this.Titulo = (document.querySelector("#idInput") as HTMLInputElement).value
  }

  public limparCampo(){
    (document.querySelector("#idInput") as HTMLInputElement).value = ""
  }
}
