import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, startWith } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from 'src/app/servicios/api.service';
import results from '../../../assets/json/csv_prov.json';
import {debounceTime} from 'rxjs/operators';

var nombres = []
nombres = results

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

  countries: Array<string> = results;
  control = new FormControl();
  filCountries: Observable<string[]> | undefined;


  
  navegar_inmuebles(){
    if(this.inmueble == "Pisos"){
      let url = "/localidad/" + this.localidad + "/" + 3;
      this.router.navigateByUrl(url);
    }else if(this.inmueble == "Oficinas"){
      let url = "/localidad/" + this.localidad + "/" + 8;
      this.router.navigateByUrl(url);
    }else if(this.inmueble == "Naves"){
      let url = "/localidad/" + this.localidad + "/" + 7;
      this.router.navigateByUrl(url);
    }else if(this.inmueble == "Garajes"){
      let url = "/localidad/" + this.localidad + "/" + 4;
      this.router.navigateByUrl(url);
    }else{
      let url = "/localidad/" + this.localidad + "/" + 3;
      this.router.navigateByUrl(url);
    }
  }


  ngOnInit(): void {
    this.filCountries = this.control.valueChanges.pipe(
      debounceTime(1000),
      startWith(''),
      map(val => this._filter(val))
    );


  }

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  private _filter(val: string): string[] {
    const formatVal = val.toLowerCase();
    return this.countries.filter(country => country.toLowerCase().indexOf(formatVal) === 0);
  }

}
