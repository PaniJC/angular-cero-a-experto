import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

    private apiKey     : string = '4z1z0XJ5FoDklbPiBrJCaOC270aHvfe2';
    private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
    private _historial : string[] = [];

    public resultados: Gif[]= [];

    get historial() {
      
      return [...this._historial];
    }

    //Constructor con los métodos
    constructor( private http: HttpClient) {

      if( localStorage.getItem('historial')){
        this._historial = JSON.parse(localStorage.getItem('historial')! );
        this.resultados = JSON.parse(localStorage.getItem('resultados')! );
      }
    }  

    buscarGifs( query: string ){

      query = query.trim().toLocaleLowerCase();
      
      if ( query.trim().length === 0 ){
        return;
      } else {
        if ( !this._historial.includes( query )) {
          this._historial.unshift( query );
          this._historial = this._historial.splice(0,10);
          localStorage.setItem('historial', JSON.stringify(this._historial));
        }  
      }

      const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('q', query)
        .set('limit', '10');

      //Ahí estamos diciendo que la respuesta luce com la interface
      this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe( ( resp ) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
      
      console.log(this._historial);
    }

}
