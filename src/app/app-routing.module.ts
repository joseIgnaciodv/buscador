import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { InmuebleComponent } from './componentes/inmueble/inmueble.component';
import { LocalidadComponent } from './componentes/localidad/localidad.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "localidad/:localidad/:tipo", component: LocalidadComponent},
<<<<<<< HEAD
  {path: "inmuebles/:id", component: InmuebleComponent}
=======
  {path: "sobre-nosotros", component: SobreNosotrosComponent}
>>>>>>> 143d5be32c571f81a505d507039190f83d06fa9b
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
