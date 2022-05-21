import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { lati } from '../componentes/inmueble/inmueble.component';
import { longi } from '../componentes/inmueble/inmueble.component';
import { nomb } from '../componentes/inmueble/inmueble.component';
import { tele } from '../componentes/inmueble/inmueble.component';
import { ubica } from '../componentes/inmueble/inmueble.component';


@Injectable({
  providedIn: 'root'
})
export class MapService {
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map | undefined;
  style = `mapbox://styles/richarduem006/cl3g81g75004p14mfjnz6ysc1`;
  // Coordenadas de la localización donde queremos centrar el mapa
  lat = lati;
  lng = longi;
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
      center: [this.lng, this.lat]
    });

        //Añadir controles de navegación
        this.map.addControl(new mapboxgl.NavigationControl());

        //Añadir un marcador
        const coords = new mapboxgl.LngLat(longi, lati);
        new mapboxgl.Marker({color: 'blue', rotation: 0}).setLngLat(coords)
        .setPopup(new mapboxgl.Popup( {offset: 25} )
        .setHTML('<h3><b>' + nomb + '</h3></b> <h4>' + ubica +'</h4><h4>'+ tele + '</h4>'))
        .addTo(this.map)
  

    
    }
}