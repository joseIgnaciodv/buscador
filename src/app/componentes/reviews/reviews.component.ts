import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reviews } from 'src/app/modelos/reviews';
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
  puntuacion_mediaa:string = '';
  mostrar:boolean = true;
  media_analisis:string = '';
  
  //Para pintar las estrellas
  Arr = Array;
  puntuacion_parseada:number = 0;

  //Para el analisis de sentimiento
  sentimiento:string = '';
  icono:string = '';
  estilo:string = '';

  //Para los comentarios
  lista_reviews: Array<Reviews> = [];
  no_comments:string = '';


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
      this.puntuacion_mediaa = this.puntuacion_media.toString();
      this.puntuacion_parseada = Math.floor(respuesta.puntuacion_media)
      this.media_analisis = respuesta.media_analisis;

      if(Number(this.media_analisis) <= -0.2){
        this.sentimiento = 'Malo';
        this.icono = 'bi bi-emoji-frown-fill';
        this.estilo = 'malo';

      }
      if(Number(this.media_analisis) > -0.2){
        this.sentimiento = 'Neutro';
        this.icono = 'bi bi-emoji-neutral-fill';
        this.estilo = 'neutro';

      }
      if(Number(this.media_analisis) > 0.2){
        this.sentimiento = 'Bueno';
        this.icono = 'bi bi-emoji-smile-fill';
        this.estilo = 'bueno';

      }
    })


    //REVIEWS
    this.api.get_reviews(this.id).subscribe(respuesta =>{
      this.lista_reviews = respuesta; 
      
      if (this.lista_reviews.length == 0) {
        this.no_comments = "Este lugar no tiene comentarios!"; 
      }
    })

    
    

  }

}
