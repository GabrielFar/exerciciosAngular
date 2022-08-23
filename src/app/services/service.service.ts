import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>("http://localhost:3000/usuarios")
  }
}
