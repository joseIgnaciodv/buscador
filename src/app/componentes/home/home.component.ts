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
    if(this.inmueble == "Pisos"){
      let url = "/localidad/" + this.localidad + "/" + 3;
      this.router.navigateByUrl(url);
    }else if(this.inmueble == "Oficinas"){
      let url = "/localidad/" + this.localidad + "/" + this.inmueble;
      this.router.navigateByUrl(url);
    }else if(this.inmueble == "Naves"){
      let url = "/localidad/" + this.localidad + "/" + this.inmueble;
      this.router.navigateByUrl(url);
    }else if(this.inmueble == "Garajes"){
      let url = "/localidad/" + this.localidad + "/" + this.inmueble;
      this.router.navigateByUrl(url);
    }
  }

  ngOnInit(): void {
    
  }

}
