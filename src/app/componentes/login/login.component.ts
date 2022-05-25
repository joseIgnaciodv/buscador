import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { NgForm } from '@angular/forms';
import { AuthServicioService } from 'src/app/servicios/auth-servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  correo: string = "";
  pass: string = "";

  constructor(private api: ApiService, private auth: AuthServicioService) { }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      this.login();
    }
  }
  
  login(){
    this.api.login(this.correo, this.pass).subscribe(usuario =>{
      this.auth.guardar_localStorage(usuario.access_token, usuario.expires_in)
    })
    console.log(this.correo, this.pass)
  }

  ngOnInit(): void {
  }

}
