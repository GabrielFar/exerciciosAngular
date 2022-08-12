import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProject';
  Input: string = ""
  Titulo: string = ""
  value: string = ""

  public salvarDado(){
    this.Titulo = this.Input
    this.value = this.Input

  }

  public limparCampo(){    
    this.value = ""
  }
}
