import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup  } from '@angular/forms';
import { FirebaseDbService } from '../firebase-db.service';

import {AngularFireStorage} from '@angular/fire/compat/storage';

import { Publicacion } from '../models/publicacion';
import { CamaraService } from '../servicios/camara/camara.service';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {

  constructor(
    private db: FirebaseDbService, 
    private storage: AngularFireStorage, 
    private camara: CamaraService) { }

  ngOnInit(): void {
  }

  //Formulario 
  publicarForm = new FormGroup({
    caption :new FormControl(),
    comentario :  new FormControl(),
    id :  new FormControl(),
    imagen : new FormControl(),
    usuario :  new FormControl()
  })

  /* subirFoto(event: any) {
    const foto : File = event.target.files[0];

    console.log(foto);
  } */

  capturarFoto() {
    this.camara.tomarFoto();
  }

  publicar(){
    this.db.postPublicacion()
  }

}
