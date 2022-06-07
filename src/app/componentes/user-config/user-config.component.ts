import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, ChartConfiguration, ChartItem, registerables } from 'chart.js';
import { Localidad } from 'src/app/modelos/localidad';
import { ApiService } from 'src/app/servicios/api.service';
import { AuthServicioService } from 'src/app/servicios/auth-servicio.service';


@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.scss']
})
export class UserConfigComponent implements OnInit {

  constructor(private auth: AuthServicioService, private router: Router, private api: ApiService) { }

  municipio: string = "";
  odio: number = 0.0;
  opciones = [3,5,7];
  datos: number[] = [];
  labels: string[] = [];
  localidades: string[] = []
  inmuebles: number[] = []

  public grafica_tarta!: Chart;
  public grafica_barra!: Chart;

  num_elementos: number = 0;
  num_inmuebles: number = 2;

  set_colores(){
    let colores: string[] = [];
    if(this.num_elementos == 3){
      colores = ['rgb(255, 99, 132)', 'rgb(54, 162, 235)','rgb(255, 205, 86)']
    }
    else if(this.num_elementos == 5){
      colores = ['#F652FF', '#6652FF', '#FFCD56', '#52CEFF', '#52FFA0']
    }
    else if(this.num_elementos == 7){
      colores = ['#F652FF', '#6652FF', '#FFCD56', '#52CEFF', '#52FFA0', '#FF5286', '#CB52FF']
    }
    return colores;
  }

  crear_grafica_barra(): void{
    this.api.get_num_inmuebles(this.num_inmuebles).subscribe(respuesta =>{
      console.log(respuesta)
      respuesta.forEach(element => {
        this.localidades.push(element.localidad)
        this.inmuebles.push(element.inmuebles)
      });
      Chart.register(...registerables);
      const data = {
        labels: this.localidades,
        datasets: [{
          data: this.inmuebles,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)'
        }]
      };
  
      const options = {
        plugins: {
          title: {
            display: true,
            text: 'Inmuebles totales por localidad'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            display: true
          }
        }
      }
  
      const config: ChartConfiguration = {
        type: 'bar',
        data: data,
        options: options
      }
  
      const chartItem: ChartItem = document.getElementById('grafica_linea') as ChartItem
      this.grafica_barra = new Chart(chartItem, config)
    })
  }

  crear_grafica_tarta(): void {
    let colores = this.set_colores();
    this.api.get_top_municipios(this.num_elementos).subscribe(respuesta =>{
      respuesta.forEach(element => {
        this.datos.push(element.vecesConsultado);
        this.labels.push(element.municipio)
      });
      Chart.register(...registerables);
      const data = {
        labels: this.labels,
        datasets: [{
          backgroundColor: colores,
          data: this.datos,
        }]
      };
  
      const options = {
        plugins: {
          title: {
            display: true,
            text: 'Municipios mas buscados'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            display: false
          }
        }
      }
  
      const config: ChartConfiguration = {
        type: 'doughnut',
        data: data,
        options: options
      }
  
      const chartItem: ChartItem = document.getElementById('tarta') as ChartItem
      this.grafica_tarta = new Chart(chartItem, config)
    })

  }

  renderizar_grafica(){
    this.datos.splice(0)
    this.labels.splice(0)
    this.grafica_tarta.destroy()
    this.crear_grafica_tarta()
  }

  renderizar_grafica_barra(){
    this.localidades.splice(0)
    this.inmuebles.splice(0)
    this.grafica_barra.destroy()
    this.crear_grafica_barra()
  }

  ngOnInit(): void {
    this.crear_grafica_barra();
    this.num_elementos = 3;
    this.crear_grafica_tarta()
    this.api.get_max_odio().subscribe(respuesta =>{
      this.municipio = respuesta.municipio;
      this.odio = respuesta.odio;
    })
  }

  logout(){
    this.auth.eliminar_localStorage()
    this.router.navigateByUrl("/")
  }

}
