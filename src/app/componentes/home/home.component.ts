import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tipos: Array<String> = ["Pisos", "Oficinas", "Naves", "Garajes"]
  inmueble: string = "";
  localidad: string = "";
  constructor(private api: ApiService, private router: Router) { }

  
  get_localidad(){
    this.api.get_localidad(this.localidad).subscribe(respuesta =>{
      let id_localidad = respuesta.id
      let url = "/localidad/" + id_localidad;
      console.log("Url: " + url)
      this.router.navigateByUrl(url)
    });
  }

  ngOnInit(): void {
  }

}
