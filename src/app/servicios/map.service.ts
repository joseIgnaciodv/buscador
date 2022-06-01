import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { InmuebleComponent } from '../componentes/inmueble/inmueble.component'
import { LugarInteres } from '../modelos/lugar_interes';
import { ApiService } from 'src/app/servicios/api.service';


@Injectable({
  providedIn: 'root'
})

export class MapService {

  nom_marker: string[] = [];
  dir_marker: string[] = [];
  lat_marker: string[] = [];
  lng_marker: string[] = [];

  lista_lugares_interes: Array<LugarInteres> = [];

  respuestaApi(){
    this.api.get_lugares_interes(Number(InmuebleComponent.lati),Number(InmuebleComponent.longi)).subscribe(respuesta =>{
      this.lista_lugares_interes = respuesta;
    }) 
     
    for(let i = 0; i < this.lista_lugares_interes.length; i++){
      let nombre = this.lista_lugares_interes[i].nombre;
      this.nom_marker.push(nombre);

      let direccion = this.lista_lugares_interes[i].direccion; 
      this.dir_marker.push(direccion);

      let latitud = this.lista_lugares_interes[i].latitud.toString();
      this.lat_marker.push(latitud);

      let longitud = this.lista_lugares_interes[i].longitud.toString();
      this.lng_marker.push(longitud);
    }
  }


  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map | undefined;
  style = `mapbox://styles/richarduem006/cl3g81g75004p14mfjnz6ysc1`;
  // Coordenadas de la localización donde queremos centrar el mapa
  lat = InmuebleComponent.lati;
  lng = InmuebleComponent.longi;
  zoom = 18;
  constructor(private api: ApiService) {
    // Asignamos el token desde las variables de entorno
    this.mapbox.accessToken = environment.mapBoxToken;
  }

  buildMap() {
    this.respuestaApi();
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [Number(InmuebleComponent.longi), Number(InmuebleComponent.lati)]
    }  
    
    );

    //Añadir controles de navegación
    this.map.addControl(new mapboxgl.NavigationControl());

    // Añadir multiples marcadores de Lugares de Interes
    for(let i = 0; i < this.lat_marker.length; i++){
      const coords = new mapboxgl.LngLat(Number(this.lng_marker[i]), Number(this.lat_marker[i]));
        new mapboxgl.Marker({color: '#83CB53', rotation: 0}).setLngLat(coords)
        .setPopup(new mapboxgl.Popup( {offset: 25} )
        .setHTML('<h3><b>' + this.nom_marker[i]  + '</h3></b> <h4>' + this.dir_marker[i] +'</h4><button style="font-size: 15px; border-radius: 8px; padding: 6px 14px; border-radius: 6px; border: none;color: #fff; background: linear-gradient(180deg, #4B91F7 0%, #367AF6 100%); background-origin: border-box; box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);" type="button" onclick="location.href="http://google.com">Acceder al lugar</button>'))
        .addTo(this.map)
    }

    // Añadir un marcador del propio Inmueble
    const coords = new mapboxgl.LngLat(Number(InmuebleComponent.longi), Number(InmuebleComponent.lati));
    new mapboxgl.Marker({color: '#34548B', rotation: 0}).setLngLat(coords)
    .setPopup(new mapboxgl.Popup( {offset: 25} )
    .setHTML('<h3><b>' + InmuebleComponent.nomb  + '</h3></b> <h4>' + InmuebleComponent.ubica +'</h4><h4>'+ InmuebleComponent.tele + '</h4>'))
    .addTo(this.map)
  }
    
}

  