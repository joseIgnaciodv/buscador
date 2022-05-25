import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServicioService } from 'src/app/servicios/auth-servicio.service';


@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.scss']
})
export class UserConfigComponent implements OnInit {

  constructor(private auth: AuthServicioService, private router: Router ) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.eliminar_localStorage()
    this.router.navigateByUrl("/")
  }

}
