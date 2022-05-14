import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Localidad } from '../modelos/localidad';
import { environment } from 'src/environments/environment';
import { Inmueble } from '../modelos/inmueble';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get_localidad(localidad: string): Observable<Localidad>{
    let url = environment.apiUrl + "api/localidad/" + localidad;
    return this.http.get<Localidad>(url);
  }

  get_inmuebles(localidad: string, tipo: string): Observable<Array<Inmueble>>{
    let url = environment.apiUrl + "api/inmuebles/" + localidad + "/" + tipo;
    return this.http.get<Array<Inmueble>>(url);
  }

}
