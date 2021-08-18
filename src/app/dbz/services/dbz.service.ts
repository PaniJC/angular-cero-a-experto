import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 11000
        },
      ]

      // JS todo lo manda por referencia
      // Para romper esa relación le damos al operador spread
      // Separa cada uno de los elementos independientes que tiene el arreglo y se crea un nuevo
      // Y lo retorna en un array en este caso; rompe la referencia con los personajes
      get personajes(): Personaje[] {
          return [...this._personajes];
      }

    constructor() {
        console.log("Servicio Inicializado");
    }

    agregarPersonaje( personaje: Personaje) {
      this._personajes.push(personaje);
    }


}