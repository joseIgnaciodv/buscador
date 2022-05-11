import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LocalidadComponent } from './componentes/localidad/localidad.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "localidad/:id", component: LocalidadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
