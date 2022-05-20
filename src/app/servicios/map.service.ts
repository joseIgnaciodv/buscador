import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map | undefined;
  style = `mapbox://styles/mapbox/streets-v11`;
  // Coordenadas de la localización donde queremos centrar el mapa
  lat = 40.4637;
  lng = -3.7492;
  zoom = 3;
  constructor() {
    // Asignamos el token desde las variables de entorno
    this.mapbox.accessToken = environment.mapBoxToken;
  }
  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
      
    });
  
    //Añadir controles de navegación
    this.map.addControl(new mapboxgl.NavigationControl());

    //Añadir un marcador
    const coords = new mapboxgl.LngLat(40.4637, -3.7492);
    new mapboxgl.Marker({color: 'blue', rotation: 0}).setLngLat(coords)
    .setPopup(new mapboxgl.Popup( {offset: 25} )
    .setHTML('<h3> Hola Prueba PopUp Ricardo</h3>'))
    .addTo(this.map)
    
    }
}