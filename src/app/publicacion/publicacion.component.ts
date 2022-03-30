import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.buscarPublicacion();
  }

  publicacion = this.ruta.snapshot.params['id'];

  //BD
  publicaciones = [ {
    "usuario": "@max",
    "imagen": "../assets/imagenes/cheems.jpeg",
    "caption": "Aqui en Cancun...",
    "comentario": "", 
    "id": "3424fsdjfh"
  },
  {
    "usuario": "@amsiedad",
    "imagen": "../assets/imagenes/amsiedad.webp",
    "caption": "Me da amsiedad...",
    "comentario": "", 
    "id": "kdhfjs"
  },
  {
    "usuario": "@perrillo",
    "imagen": "../assets/imagenes/meme-perrillo.jpeg",
    "caption": "Unos perrillos :( ",
    "comentario": "", 
    "id": "hfsdjkhfsdjk"
  }
  ];

  publicacionDetalle: any= {}

  buscarPublicacion(): any {
    for(let i = 0; i < this.publicaciones.length; i++) {
      if(this.publicaciones[i].id == this.publicacion) {
        this.publicacionDetalle = this.publicaciones[i];
      }
    }
    return this.publicacionDetalle;
  }


}
