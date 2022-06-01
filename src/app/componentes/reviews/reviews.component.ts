import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  id:number = 0;
  // created_at: Date,
  // updated_at: Date
  nombre:string = '';
  direccion:string = '';
  latitud:number = 0;
  longitud:number = 0;
  longitudRadius:number = 0;
  latitudRadius:number = 0;
  tipo_establecimiento:string = '';
  telefono:string = '';
  puntuacion_media:number = 0;
  media_analisis:string = '';
  //Falta unir los datos en el HTML

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.api.get_lugar_interes(this.id).subscribe(respuesta =>{
      this.nombre = respuesta.nombre;
      this.direccion = respuesta.direccion;
      this.latitud = respuesta.latitud;
      this.longitud = respuesta.longitud;
      this.longitudRadius = respuesta.longitudRadius;
      this.latitudRadius = respuesta.latitudRadius;
      this.tipo_establecimiento = respuesta.tipo_establecimiento;
      this.telefono = respuesta.telefono;
      this.puntuacion_media = respuesta.puntuacion_media;
      this.media_analisis = respuesta.media_analisis;
    })
  }

}
