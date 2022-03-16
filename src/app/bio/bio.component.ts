import { Component, OnInit } from '@angular/core';
import * as data from '../datos.json';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //datos: data = {}

  siguiendo = false;

  editandoMensaje= false;
  editandoCorreo = false;

  usuario = {
    "nombre":"Max",
    "alias": "@maxelperrito",
    "fotoPerfil": "../assets/imagenes/meme-perrillo.jpeg",
    "seguidores": 9437834754985,
    "seguidos": 1,
    "bio": "Guau", 
    "publicaciones": [
      "../assets/imagenes/cheems.jpeg",
      "../assets/imagenes/amsiedad.webp",
      "../assets/imagenes/meme-perrillo.jpeg"
    ]
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
