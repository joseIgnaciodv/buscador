import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.scss']
})
export class InmuebleComponent implements OnInit {
id: number = 0;
// created_at: Date
// updated_at: Date
localizaciones_id:number = 0
latitud:number = 0;
longitud:number = 0;
nombre: string = ""
precio: number = 0;
imagenes: string[] = []
descripcion: string = "";
enlace: string = "";
habitaciones: number = 0;
banos: number = 0;
m2: string = "";
telefono: string = "";
ubicacion: string = "";
caracteristicas: string[] = []

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.api.get_inmueble_concreto(this.id).subscribe(respuesta =>{
      this.localizaciones_id = respuesta.localizaciones_id;
      this.latitud = respuesta.latitud;
      this.longitud = respuesta.longitud;
      this.nombre = respuesta.nombre;
      this.precio = respuesta.precio;
      this.imagenes = respuesta.imagenes;
      this.descripcion = respuesta.descripcion;
      this.enlace = respuesta.enlace;
      this.habitaciones = respuesta.habitaciones;
      this.banos = respuesta.banos;
      this.m2 = respuesta.m2;
      this.telefono = respuesta.telefono;
      this.ubicacion = respuesta.ubicacion;
      this.caracteristicas = respuesta.caracteristicas;
    })
  }

}
