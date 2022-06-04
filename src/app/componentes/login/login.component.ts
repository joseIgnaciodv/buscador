import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { AuthServicioService } from 'src/app/servicios/auth-servicio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  correo: string = "";
  pass: string = "";

  constructor(private api: ApiService, private auth: AuthServicioService, private router: Router) { }
  
  async login(){
    this.api.login(this.correo, this.pass).subscribe(usuario =>{
      this.auth.guardar_localStorage(usuario.access_token, usuario.expires_in);
    })
    await this.delay(1000);
    if (localStorage.getItem('token')==null){
      alert("Usuario o contraseña incorrectos");
    } else {
      this.router.navigate(['/userconfig']);
    }
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  ngOnInit(): void {
  }

}
