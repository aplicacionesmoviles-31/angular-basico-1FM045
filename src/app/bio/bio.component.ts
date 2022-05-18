import { Component, OnInit } from '@angular/core';
import * as data from '../datos.json';

import { ActionSheetController } from '@ionic/angular';
import { FirebaseDbService } from '../firebase-db.service';
import { Usuario } from '../shared/usuario';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

 

  constructor(
    private actionSheetController: ActionSheetController, 
    private db: FirebaseDbService) {

      this.usuario = {
        nombre: "", 
        alias: "", 
        bio: "",
        fotoPerfil: "" , 
        seguidores: "", 
        seguidos: ""
      };
      
     }
  ngOnInit(): void {

    this.cargarBioUsuario();
  }


  usuario : Usuario ;
  

  siguiendo = false;

  editandoMensaje= false;
  editandoCorreo = false;

  cargarBioUsuario() {
    this.db.getBioUsuario().subscribe(res => {

      this.usuario = Object.assign(res);
      console.log(res);
    })
  }

 

 // usuario.nombre = ""; 

  

  // usuarioNoUsar = {
  //   "nombre":"Max",
  //   "alias": "@maxelperrito",
  //   "fotoPerfil": "../assets/imagenes/meme-perrillo.jpeg",
  //   "seguidores": 9437834754985,
  //   "seguidos": 1,
  //   "bio": "Guau", 
  //   "publicaciones": [
  //     "../assets/imagenes/cheems.jpeg",
  //     "../assets/imagenes/amsiedad.webp",
  //     "../assets/imagenes/meme-perrillo.jpeg"
  //   ]
  // }

  async createActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Cancelar', 
        role: 'cancel'
      },
      {
        text: 'Bloquear usuario', 
        role: 'destructive'
      }]
    });

    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  seguir(): void {
    this.siguiendo = !this.siguiendo;
  }

  enviarMensaje(): void {
    
  }

  enviarEmail(): void {

  }

  desplegarOpciones(): void {
    //En proceso.
  }


}
