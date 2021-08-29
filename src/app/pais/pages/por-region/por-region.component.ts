import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right:5px;
    }
  `
  ]
})
export class PorRegionComponent   {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] =[];
  
  constructor( private paisService : PaisService) { }

  activarRegion( region:string ) {

    if ( region === this.regionActiva ) { return; } // Si estoy dando clic en la misma region, no retorne nada.

      this.paises=[];
      this.regionActiva = region;
      console.log(this.regionActiva);

      this.paisService.buscarRegion( region )
        .subscribe( (paises) => {
          this.paises = paises;
          console.log(paises)
        }, (err) => {
          this.paises=[]
        })

      //TODO: hacer el llamado al servicio 
  }

  getClaseCss( region:string ) {
    return (region === this.regionActiva)
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

}
