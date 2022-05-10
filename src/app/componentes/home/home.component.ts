import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tipos: Array<String> = ["Pisos", "Oficinas", "Naves", "Garajes"]
  inmueble: string = "";
  localidad: string = ""
  constructor(private api: ApiService) { }

  
  get_localidad(){
    this.api.get_localidad(this.localidad).subscribe(respuesta =>{
      console.log("funciona");
      console.log(respuesta.localidad);
    });
  }

  ngOnInit(): void {
  }

}
