import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { InmuebleComponent } from './componentes/inmueble/inmueble.component';
import { LocalidadComponent } from './componentes/localidad/localidad.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';
import { LoginComponent } from './componentes/login/login.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "localidad/:localidad/:tipo", component: LocalidadComponent},
  {path: "inmuebles/:id", component: InmuebleComponent},
  {path: "sobre-nosotros", component: SobreNosotrosComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
