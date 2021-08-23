import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  //Inyectamos el servicio
  constructor (private gifsService: GifsService){}

  buscar(termino: string) {
    console.log(termino);
    this.gifsService.buscarGifs(termino);
  }

  get Historial() {
    return this.gifsService.historial;
  }



}
