import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { InmuebleComponent } from './componentes/inmueble/inmueble.component';
import { LocalidadComponent } from './componentes/localidad/localidad.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';
import { LoginComponent } from './componentes/login/login.component';
import {UserConfigComponent} from './componentes/user-config/user-config.component';
import { AuthGuard } from './componentes/auth.guard';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "localidad/:localidad/:tipo", component: LocalidadComponent},
  {path: "inmuebles/:id", component: InmuebleComponent},
  {path: "sobre-nosotros", component: SobreNosotrosComponent},
  {path: "login", component: LoginComponent},
  {path: "userconfig", component: UserConfigComponent,  canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
