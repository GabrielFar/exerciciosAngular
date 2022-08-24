import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProject';
  localStorage = localStorage['token']

  constructor(private router: Router){}

  public deslogar(){
    localStorage['token'] = 0
    this.router.navigate(['/login']);
    this.localStorage = 0
  }
}