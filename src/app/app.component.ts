import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola, mundo!';

  imagenes = [
    "../assets/imagenes/cheems.jpeg",
    "../assets/imagenes/amsiedad.webp",
    "../assets/imagenes/meme-perrillo.jpeg"
  ];

  ingles = false;
}
