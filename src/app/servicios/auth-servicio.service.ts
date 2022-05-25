import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServicioService {


  constructor() { }

  guardar_localStorage(token: string, expires_in: number){
    localStorage.setItem("token", token)
    localStorage.setItem("expires_in", String(expires_in))
  }

  eliminar_localStorage(){
    localStorage.removeItem("token")
    localStorage.removeItem("expires_in")
  }

  get_token(): string | null{
    let token = localStorage.getItem('token')
    return token;
  }

  isLogged(): boolean{
   let token = this.get_token()
    if(token){
      return true;
    }
    return false;
  }
}
