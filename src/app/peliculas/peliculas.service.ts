import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Peliculas } from './peliculas';


const API_URL=''

@Injectable({
  providedIn: 'root'
})
export class PeliculasService{
constructor(private http:HttpClient){}

    listarPeliculas():Observable<Peliculas[]>{
      return this.http.get<Peliculas[]>(API_URL);
    }
    crearPeliculas(Peliculas:Peliculas):Observable<Peliculas>{
      return this.http.post<Peliculas>(API_URL, Peliculas)
    }
    editarPeliculas(Peliculas:Peliculas, idPeliculas:number):Observable<Peliculas>{
      return this.http.put<Peliculas>('http://127.0.0.1:8000/api/peliculas/actualizacionPeliculas/1/'+idPeliculas, Peliculas)
    }
    eliminarPeliculas(idPeliculas: number): Observable<Peliculas> {
      return this.http.delete<Peliculas>(''+idPeliculas);
    }
  
}