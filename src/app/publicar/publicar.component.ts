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
        caption: "", 
        comentario: "", 
        imagen:"", 
        usuario: this.usuario
      }
    }

    

  ngOnInit(): void {

    this.getUsuario().subscribe(res => {
      this.usuario = res.toString();
    })
 
  }

  nuevoPost : Publicacion;
  usuario:  string = '';

  getUsuario() {
    return this.db.getUsuario()
  }

  capturarFoto() { //Lanzar Camara
    
  }

  publicar(nuevoPostData: Publicacion ){ //opcion al dar submit
    

    nuevoPostData.usuario = this.usuario;
    console.log(nuevoPostData)   

    this.db.postPublicacion(nuevoPostData).subscribe(res => {
      console.log("Publicado!")
    })
  }

}
