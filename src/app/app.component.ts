import { Component, OnInit } from '@angular/core';
import { FirebaseDbService } from './firebase-db.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  

  constructor(private fb: FirebaseDbService){}

  ngOnInit(): void {
    this.getUsuario().subscribe(res => {
      this.usuario = res.toString();
    })
    
  }

  usuario : string = '';

  getUsuario() {
    return this.fb.getUsuario()
  }
}
