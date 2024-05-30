import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Directores } from './directores';


const API_URL=''

@Injectable({
  providedIn: 'root'
})
export class DirectoresService{
constructor(private http:HttpClient){}

    listarDirector():Observable<Directores[]>{
      return this.http.get<Directores[]>(API_URL);
    }
    crearDirector(directores:Directores):Observable<Directores>{
      return this.http.post<Directores>(API_URL, directores)
    }
    editarDirector(directores:Directores, idDirector:number):Observable<Directores>{
      return this.http.put<Directores>('http://127.0.0.1:8000/api/peliculas/actualizacionDirector/1/'+idDirector, directores)
    }
    eliminarDirector(idDirector: number): Observable<Directores> {
      return this.http.delete<Directores>(''+idDirector);
    }
  
}