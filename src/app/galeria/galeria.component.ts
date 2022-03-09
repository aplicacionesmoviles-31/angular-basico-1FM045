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
    "publicaciones": [
      "../assets/imagenes/cheems.jpeg",
      "../assets/imagenes/amsiedad.webp",
      "../assets/imagenes/meme-perrillo.jpeg"
    ]
  }

}
