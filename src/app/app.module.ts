import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalidadComponent } from './componentes/localidad/localidad.component';
import { FooterComponent } from './componentes/footer/footer.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FiltroPipe } from './pipes/filtro.pipe';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';
import { InmuebleComponent } from './componentes/inmueble/inmueble.component';
<<<<<<< HEAD
// import { MapaComponent } from './componentes/mapa/mapa.component';
// import { MapComponent } from './componentes/map/map.component';
=======
import { MapComponent } from './componentes/map/map.component';
>>>>>>> 143d5be32c571f81a505d507039190f83d06fa9b



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocalidadComponent,
    FiltroPipe,
    FooterComponent,
    SobreNosotrosComponent,
    InmuebleComponent,
<<<<<<< HEAD
    // MapaComponent,
    // MapComponent,
=======
    MapComponent,
>>>>>>> 143d5be32c571f81a505d507039190f83d06fa9b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    RouterModule,
    MatNativeDateModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
