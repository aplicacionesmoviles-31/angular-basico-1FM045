import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup  } from '@angular/forms';
import { FirebaseDbService } from '../firebase-db.service';

import {AngularFireStorage} from '@angular/fire/compat/storage';

import { Publicacion } from '../shared/publicacion';


@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {

  constructor(
    private db: FirebaseDbService, 
    private storage: AngularFireStorage) { 

      this.nuevoPost = {
        id: "" , 
        caption: "", 
        comentario: "", 
        imagen:"", 
        usuario:""
      }
    }

  ngOnInit(): void {
  }

  nuevoPost : Publicacion;


  capturarFoto() { //Lanzar Camara
    
  }

  publicar(nuevoPostData: Publicacion ){ //opcion al dar submit
    console.log("publicado");

    console.log(nuevoPostData);
  }

}
