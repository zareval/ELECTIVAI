import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Series } from './series';


const API_URL=''

@Injectable({
  providedIn: 'root'
})
export class SeriesService{
constructor(private http:HttpClient){}

    listarSeries():Observable<Series[]>{
      return this.http.get<Series[]>(API_URL);
    }
    crearSeries(Series:Series):Observable<Series>{
      return this.http.post<Series>(API_URL, Series)
    }
    editarSeries(Series:Series, idSeries:number):Observable<Series>{
      return this.http.put<Series>('http://127.0.0.1:8000/api/peliculas/actualizacionSeries/1/'+idSeries, Series)
    }
    eliminarSeries(idSeries: number): Observable<Series> {
      return this.http.delete<Series>(''+idSeries);
    }
  
}