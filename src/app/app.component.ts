import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProject';

  constructor(private router: Router){}

  public deslogar(){
    localStorage['token'] = "deslogado"
    this.router.navigate(['/login']);
  }

  public readLocalStorageToken() {
    return localStorage['token'];
  }
}