import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = "Hola Mundo";
  hayError: boolean = false;
  paises: Country[] = [];

  //Inyectamos el servicio que creamos de paisService
  constructor( private paisService: PaisService) { }

  //Método para buscar país, utilizando el servicio inyectado
  buscar( termino: string ) {
    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscarPais( this.termino)
      .subscribe( (paises) => { //Para que un observable se dispare, tengo que tener un suscribe - tengo que estar suscrito
        console.log(paises);
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      } ); //Con este manejo de error, aparecerá cuando aplique en consola un mensaje de error
  }
  
  sugerencias( termino:string ) {
    this.hayError = false;
    //TODO Crear sugerencias
    
  }

}
