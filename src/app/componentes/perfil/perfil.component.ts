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
  repite_correo: string = "";
  id: number = 0;
  displayStyle = "none";

  constructor(private api: ApiService, private auth: AuthServicioService, private router: Router) { }

  get_user(){
    if (this.repite_correo == this.correo){
      this.api.get_user(this.auth.get_token()).subscribe(user => {
        this.id = user.id;
        this.api.updateUserEmail(this.correo, this.id).subscribe(res =>{
          if(res == 200){
            console.log("Usuario actualizado");
            this.router.navigate(['/userconfig']);
          }
        })
      }
      );
    } else {
      this.displayStyle = "block";
    }
  }


  ngOnInit(): void {
    //console.log(this.auth.isLogged());
    //console.log(this.auth.get_token());
  }

  closePopup() {
    this.displayStyle = "none";
  }

}

