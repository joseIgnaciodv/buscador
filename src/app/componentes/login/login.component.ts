import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  correo: string = "";
  pass: string = "";

  constructor(private api: ApiService) { }

  login(){
    this.api.login(this.correo, this.pass).subscribe(usuario =>{
      console.log(usuario.user.name)
    })
  }

  ngOnInit(): void {
  }

}
