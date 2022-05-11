import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-localidad',
  templateUrl: './localidad.component.html',
  styleUrls: ['./localidad.component.scss']
})
export class LocalidadComponent implements OnInit {
  num_odio: number = 0;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
    // let id_localidad = this.route.snapshot.params['id']
    // this.num_odio = id_localidad;

  }

}
