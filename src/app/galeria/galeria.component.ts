import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  usuario = {
    "nombre":"Max",
    "alias": "@maxelperrito",
    "fotoPerfil": "../assets/imagenes/meme-perrillo.jpeg",
    "seguidores": 9437834754985,
    "seguidos": 1,
    "bio": "Guau", 
    "publicaciones" : [ {
      "usuario": "@maxelperrito",
      "imagen": "../assets/imagenes/cheems.jpeg",
      "caption": "Aqui en Cancun...",
      "comentario": "", 
      "id": "3424fsdjfh"
    },
    {
      "usuario": "@maxelperrito",
      "imagen": "../assets/imagenes/amsiedad.webp",
      "caption": "Me da amsiedad...",
      "comentario": "", 
      "id": "kdhfjs"
    },
    {
      "usuario": "@maxelperrito",
      "imagen": "../assets/imagenes/meme-perrillo.jpeg",
      "caption": "Unos perrillos :( ",
      "comentario": "", 
      "id": "hfsdjkhfsdjk"
    }
    ]
  }

}
