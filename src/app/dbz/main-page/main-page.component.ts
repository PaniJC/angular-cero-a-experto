import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {


  nuevo: Personaje = {
    nombre:'Roshi',
    poder: 1000
  }

  constructor() {}

  /*get personajes():Personaje[] {
    return this.dbzService.personajes;
  }*/

  /*agregarNuevoPersonaje(argumento: Personaje) {
    console.log(argumento);
    this.personajes.push(argumento);
  }*/

  /*constructor(private dbzService: DbzService) { // Acá estamos inyectando el servicio en este componente*/

  }

