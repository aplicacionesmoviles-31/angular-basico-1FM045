import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';

//import { map } from 'rxjs/operators';
//import { FirebaseDbService } from '../firebase-db.service';
//import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
//import { Observable } from 'rxjs';
//import {Post} from './';

import {Publicacion} from '../shared/publicacion';

import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {
  
  
  constructor(private http: HttpClient, 
    private dbFirebase: FirebaseDbService) { 
    
        //this.dataRef = this.dbF.list('publicaciones');
        //this.data = dataRef.valueChanges();

        //this.data = this.dbF.list('publicaciones').valueChanges();
  }

  ngOnInit(): void {
    this.getPublicacionesRequest();

    //console.log(this.resPublicaciones, "res");

   /* this.data.subscribe(res => {
      console.log(res);
    })  */
  }

  //dataRef :  AngularFireList<any>;
  //data: Observable<any>;

  //data: Observable<any>;
  //posts: Post = [];

  resPublicaciones : any = [];//Publicacion[] = [];

  getPublicacionesRequest()  {
    this.dbFirebase.getPublicaciones().subscribe(res => {
      
      //console.log( Object.entries(res).map((e) => ( { [e[0]]: e[1] } )) );

      let rp = Object.entries(res).map((e) => ( { [e[0]]: e[1] } ));
      console.log(rp);

      

      this.resPublicaciones = rp;
    })

    
  }

  borrarPost(id: number) {
    this.dbFirebase.deletePublicacion(id).subscribe(res => {

      console.log(res);
      //console.log("deleted");
    })
  }

  ocultarPost(id: number) {
    //this.resPublicaciones 
  }


  @Input() comentario: string = '';

  postComment(comentario: string, publicacion: number): void {
    //publicacion.comentario = this.comentario;
    this.comentario = "";
    this.comentario = comentario;
    

    //Aqui va el request de FirebaseDb
    this.dbFirebase.postComment(comentario, publicacion).subscribe(res=> {
      console.log(res);
    })
  }


}
