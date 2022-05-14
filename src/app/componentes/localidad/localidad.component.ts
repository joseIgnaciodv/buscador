import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Inmueble } from 'src/app/modelos/inmueble';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-localidad',
  templateUrl: './localidad.component.html',
  styleUrls: ['./localidad.component.scss']
})
export class LocalidadComponent implements OnInit {
  num_odio: number = 0;
  localidad: string = "";
  tipo: string = "";

  lista_inmuebles: Array<Inmueble> = []

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }
  
  get_odio(){
    this.api.get_localidad(this.localidad).subscribe(respuesta =>{
      this.num_odio = respuesta.odio;
    });
  }

  get_inmuebles(){
    this.api.get_inmuebles(this.localidad, this.tipo).subscribe(respuesta =>{
      this.lista_inmuebles = respuesta;
    })
  }

  ngOnInit(): void {
    this.localidad = this.route.snapshot.params['localidad'];
    this.tipo = this.route.snapshot.params['tipo']
    this.get_inmuebles();
  }

}
