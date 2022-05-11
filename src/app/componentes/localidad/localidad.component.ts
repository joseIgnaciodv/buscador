import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-localidad',
  templateUrl: './localidad.component.html',
  styleUrls: ['./localidad.component.scss']
})
export class LocalidadComponent implements OnInit {
  num_odio: number = 0;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }
  
  get_odio(){
    let localidad = this.route.snapshot.params['id'];
    this.api.get_localidad(localidad).subscribe(respuesta =>{
      this.num_odio = respuesta.odio;
    });
  }
  ngOnInit(): void {
    // let id_localidad = this.route.snapshot.params['id']
    // this.num_odio = id_localidad;
  }

}
