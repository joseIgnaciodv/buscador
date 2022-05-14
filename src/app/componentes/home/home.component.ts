import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tipos: Array<String> = ["Pisos", "Oficinas", "Naves", "Garajes"]
  inmueble: string = "";
  localidad: string = "";
  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) { }

  
  navegar_inmuebles(){
      let url = "/localidad/" + this.localidad + "/" + this.inmueble;
      this.router.navigateByUrl(url);
    }

  ngOnInit(): void {
    
  }

}
