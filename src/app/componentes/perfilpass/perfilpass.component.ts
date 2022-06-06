import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { AuthServicioService } from 'src/app/servicios/auth-servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfilpass',
  templateUrl: './perfilpass.component.html',
  styleUrls: ['./perfilpass.component.scss']
})
export class PerfilpassComponent implements OnInit {

  pass: string = "";
  repite_pass: string = "";
  id: number = 0;
  displayStyle = "none";

  constructor(private api: ApiService, private auth: AuthServicioService, private router: Router) { }

  get_user(){
    if (this.repite_pass == this.pass){
      this.api.get_user(this.auth.get_token()).subscribe(user => {
        this.id = user.id;
        this.api.updateUserPass(this.pass, this.id).subscribe(res =>{
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
