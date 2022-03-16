import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs/tabs.component';
import { FormsModule } from '@angular/forms';
import { RoutesModule } from './routes.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//Firebase
import {AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

//temporalmente aqui
import { BioComponent } from './bio/bio.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { FeedComponent } from './feed/feed.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicacionComponent } from './publicacion/publicacion.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    BioComponent, 
    GaleriaComponent,
    PublicacionComponent, 
    PerfilComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RoutesModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
