import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modelos/user';
import { ApiService } from 'src/app/servicios/api.service';
import { AuthServicioService } from 'src/app/servicios/auth-servicio.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  correo: string = "";
  pass: string = "";
  id: number = 0;

  constructor(private api: ApiService, private auth: AuthServicioService, private router: Router) { }

  get_user(){
    this.api.get_user(this.auth.get_token()).subscribe(user => {
      this.id = user.id;
      this.api.updateUser(this.correo, this.pass, this.id).subscribe(res =>{
        if(res == 200){
          console.log("Usuario actualizado");
          alert("Usuario actualizado");
        }
      })
    }
    );

  }


  ngOnInit(): void {
    console.log(this.auth.isLogged());
    console.log(this.auth.get_token());
  }

}

