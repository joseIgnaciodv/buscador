import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { InmuebleComponent } from '../componentes/inmueble/inmueble.component'


@Injectable({
  providedIn: 'root'
})
export class MapService {
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map | undefined;
  style = `mapbox://styles/richarduem006/cl3g81g75004p14mfjnz6ysc1`;
  // Coordenadas de la localización donde queremos centrar el mapa
  lat = InmuebleComponent.lati;
  lng = InmuebleComponent.longi;
  zoom = 18;
  constructor() {
    // Asignamos el token desde las variables de entorno
    this.mapbox.accessToken = environment.mapBoxToken;
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [Number(InmuebleComponent.longi), Number(InmuebleComponent.lati)]
    });

    //Añadir controles de navegación
    this.map.addControl(new mapboxgl.NavigationControl());

    // Añadir multiples marcadores de Lugares de Interes
    for(let i = 0; i < InmuebleComponent.lat_marker.length; i++){
      const coords = new mapboxgl.LngLat(Number(InmuebleComponent.lng_marker[i]), Number(InmuebleComponent.lat_marker[i]));
        new mapboxgl.Marker({color: '#83CB53', rotation: 0}).setLngLat(coords)
        .setPopup(new mapboxgl.Popup( {offset: 25} )
        .setHTML('<h3><b>' + InmuebleComponent.nom_marker[i]  + '</h3></b> <h4>' + InmuebleComponent.dir_marker[i] +'</h4><button style="font-size: 15px; border-radius: 8px; padding: 6px 14px; border-radius: 6px; border: none;color: #fff; background: linear-gradient(180deg, #4B91F7 0%, #367AF6 100%); background-origin: border-box; box-shadow: 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2);" type="button" onclick="location.href="http://google.com">Acceder al lugar</button>'))
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