import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  //Atributo que contiene la ruta MADRE o principal; todo e segmento es parecido.
  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpParams () {
    return  new HttpParams()
    .set( 'fields', 'name;capital;flag;alpha2Code;population' ); 
  }

  //me interesa el servicio Http; por eso lo inyecto acá
  constructor( private http: HttpClient) { }

  //Buscar país es un método que recibe un método y retorna un observable
  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`; //Objeto que me permite configurar los params de la url
    return this.http.get<Country[]>( url, { params: this.httpParams } ); // Esta es la petición que utilizaremos de http
    //el parámetro lo construimos completo y paramétrico arriba

    //Si yo utilizara el suscribe(), es porque quiero retornar al servicio lo que consulte; en este caso se lo quiero retornar a quien sea que la mandó a llamar

    //La consulta retorna un Observable (colección de datos de múltiples valores)* (hay que importarlo de rxjs) y le tengo que decir que es lo que va a retornar. Por el momento le coloco <any>.

  }

  //fields=name;capital;flag;alpha2code;population

  buscarCapital( termino: string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  getPaisPorAlpha( id: string ):Observable<Country>{
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }

  buscarRegion ( region:string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/region/${ region }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
      /*.pipe(
        tap( console.log )
      )*/
  }



}
