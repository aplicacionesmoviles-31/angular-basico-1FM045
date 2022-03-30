import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPublicaciones().subscribe(res => {

      this.resPublicaciones = res;
    });
  }

  resPublicaciones : any = [];

  getPublicaciones() {
    return this.http.get('https://insta-ionic-f21ba-default-rtdb.firebaseio.com/publicaciones.json')
  }


  @Input() comentario: string = '';

  postComment(comentario: string, publicacion: any): void {
    publicacion.comentario = this.comentario;
    this.comentario = "";
  }

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


}
