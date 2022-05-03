import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { map } from 'rxjs/operators';


import { FirebaseDbService } from '../firebase-db.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

//import {Post} from './';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {
  
  
  constructor(private http: HttpClient, 
    private dbFirebase: FirebaseDbService, 
    private dbF: AngularFireDatabase) { 
    
        //this.dataRef = this.dbF.list('publicaciones');
        //this.data = dataRef.valueChanges();

        this.data = this.dbF.list('publicaciones').valueChanges();
  }

  ngOnInit(): void {
    this.getPublicaciones().subscribe(res => {

      this.resPublicaciones = res;
    });

    this.data.subscribe(res => {
      console.log(res);
    })
  }

  //dataRef :  AngularFireList<any>;
  //data: Observable<any>;

  data: Observable<any>;
  //posts: Post = [];

  

  resPublicaciones : any = [];

  getPublicaciones() {
    return this.http.get('https://insta-ionic-f21ba-default-rtdb.firebaseio.com/publicaciones.json')
  }

  


  @Input() comentario: string = '';

  postComment(comentario: string, publicacion: any): void {
    publicacion.comentario = this.comentario;
    this.comentario = "";
  }


}
