import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';


import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

pais!: Country; //Viene nulo pero yo sé lo que estoy haciendo

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService ) { }

  ngOnInit(): void {

    //Leemos los parámetros que vienen en el URL, extraemos el id
    //y ese es el id para la consulta en el segundo observable
    /*this.activatedRoute.params
      .subscribe( ({ id }) => {
        console.log( id );

        this.paisService.getPaisPorAlpha( id )
          .subscribe( pais => {
            console.log(pais);
          })
      } )
  }*/

  //******* OTRA MANERA DE TRABAJARLO */
  // Accedemos al observable en el cual están los parámetros
  this.activatedRoute.params
    //Después del pipe, va el subscribe; por ahora van los operadores del RxJs
    .pipe(
      //Permite recibir un observable  retornar otro observable
      switchMap( ({ id }) => this.paisService.getPaisPorAlpha(id) ),
      tap( console.log ) // No estoy ejecutando la función, la estoy mandando a llamar apenas pase por ese punto
    )
    .subscribe( pais => {
      this.pais = pais;
    });

  }
}
