import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Series } from './series';


const API_URL='http://127.0.0.1:8000/api/peliculas/'

@Injectable({
  providedIn: 'root'
})
export class SeriesService{
constructor(private http:HttpClient){}

    listarSeries():Observable<Series[]>{
      return this.http.get<Series[]>(API_URL+'creacionSe');
    }
    crearSeries(Series:Series):Observable<Series>{
      return this.http.post<Series>(API_URL+'creacionSe/', Series)
    }
    editarSerie(series: Series, id: number): Observable<Series> {
      return this.http.put<Series>(API_URL + `editarSerie/${id}/`, series);
    }
    detallesSerie(id: number): Observable<Series> {
      return this.http.get<Series>(API_URL + `series/${id}/`);
    }
    eliminarSeries(idSerie: number): Observable<Series> {
      return this.http.delete<Series>(API_URL+`eliminacionSe/${idSerie}/`);
    }
  
}