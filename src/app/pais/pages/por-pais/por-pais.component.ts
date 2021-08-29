import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor:pointer;
    }


  `
  ]
})
export class PorPaisComponent {

  termino: string = "Hola Mundo";
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean= false;

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
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais( termino )
      .subscribe( (paises) => {
        this.paisesSugeridos = paises.splice(0,5);
      }, (err) => {
        this.paisesSugeridos=[];
      } );
    
  }


  buscarSugerido( termino:string ) {
    this.buscar( termino );


  }

}
