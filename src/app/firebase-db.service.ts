import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {AngularFireDatabase} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDbService {

  constructor(private http: HttpClient, private dbFirebase: AngularFireDatabase) { }

  //GET

  getPublicacionesFirebase() {
    return this.dbFirebase.list('publicaciones').valueChanges();
  }
  getPublicaciones(){
    return this.http.get('https://insta-ionic-f21ba-default-rtdb.firebaseio.com/publicaciones.json')
  }

  getBioUsuario(){
    return this.http.get('https://insta-ionic-f21ba-default-rtdb.firebaseio.com/usuario.json')
  }

  getUsuario(){
    return this.http.get('https://insta-ionic-f21ba-default-rtdb.firebaseio.com/usuario/alias.json')
  }

  getPublicacionDetalle(idPublicacion: string){
    return this.http.get('https://insta-ionic-f21ba-default-rtdb.firebaseio.com/publicaciones' + idPublicacion + '.json')
  }

  getGaleriaUsuario(){
    //return this.http.get()
  }


  //DELETE
  deletePublicacion(idPublicacion: string){
    return this.http.delete('https://insta-ionic-f21ba-default-rtdb.firebaseio.com/publicaciones' + idPublicacion + '.json')
  }

  //UPDATE
  updatePublicacion(){}

  updateBioUsuario(nuevaBio: string){
    return this.http.put('https://insta-ionic-f21ba-default-rtdb.firebaseio.com/usuario/bio.json', nuevaBio);
  }

  //POST
  postPublicacion(){
    //return this.http.post('https://insta-ionic-f21ba-default-rtdb.firebaseio.com/usuario/publicaciones.json', )
  }

}
