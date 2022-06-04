import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Localidad } from '../modelos/localidad';
import { environment } from 'src/environments/environment';
import { Inmueble } from '../modelos/inmueble';
import { LugarInteres } from '../modelos/lugar_interes';
import { Usuario } from '../modelos/usuario';
import { ResultadoInmueble } from '../modelos/resultado-inmueble';


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

  get_inmueble_concreto(id: number): Observable<Inmueble>{
    let url = environment.apiUrl + "api/inmuebles/" + id;
    return this.http.get<Inmueble>(url);
  }

  get_lugares_interes(latitud: number, longitud: number): Observable<Array<LugarInteres>>{
    let url = environment.apiUrl + "api/lugar_interes/" + latitud + "/" + longitud;
    return this.http.get<Array<LugarInteres>>(url);
  }

  get_lugar_interes(id: number): Observable<LugarInteres>{
    let url = environment.apiUrl + "api/lugar_interes/" + id;
    return this.http.get<LugarInteres>(url);
  }

  login(email: string, password: string): Observable<Usuario>{
    let datos = {'email': email, 'password': password}
    let url = environment.apiUrl + "api/auth/login";
    return this.http.post<Usuario>(url, datos)
  }

  get_top_municipios(num: number): Observable<Localidad[]>{
    let url = environment.apiUrl + "api/get_top_municipios/" + num;
    return this.http.get<Localidad[]>(url);
  }

  get_num_inmuebles(num: number): Observable<ResultadoInmueble[]>{
    let url = environment.apiUrl + "api/get_num_inmuebles/" + num;
    return this.http.get<ResultadoInmueble[]>(url);
  }

  get_max_odio(): Observable<Localidad>{
    let url = environment.apiUrl + "api/get_max_municipio_odio";
    return this.http.get<Localidad>(url);
  }

}
