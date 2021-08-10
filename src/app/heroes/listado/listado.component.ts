import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'IronMan', 'Goku', 'Lufy'];
  heroeBorrado: string = '';
  
  borrarHeroe(): void {
    //this.heroes.splice(0,1); Este sirve
    this.heroeBorrado = this.heroes.shift() || '';
    console.log('El héroe nborrado fue',this.heroeBorrado);
  }


}
