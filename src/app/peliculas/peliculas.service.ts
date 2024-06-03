import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Peliculas } from './peliculas';


const API_URL='http://127.0.0.1:8000/api/peliculas/'

@Injectable({
  providedIn: 'root'
})
export class PeliculasService{
constructor(private http:HttpClient){}

    listarPeliculas():Observable<Peliculas[]>{
      return this.http.get<Peliculas[]>(API_URL+'creacionPe');
    }
    crearPeliculas(Peliculas:Peliculas):Observable<Peliculas>{
      return this.http.post<Peliculas>(API_URL+'creacionPe/', Peliculas)
    }
    editarPelicula(peliculas: Peliculas, id: number): Observable<Peliculas> {
      return this.http.put<Peliculas>(API_URL + `editarPelicula/${id}/`, peliculas);
    }
    
    detallesPelicula(id: number): Observable<Peliculas> {
      return this.http.get<Peliculas>(API_URL + `peliculas/${id}/`);
    }

    eliminarPeliculas(idPeliculas: number): Observable<Peliculas> {
      return this.http.delete<Peliculas>(API_URL+`eliminacionPeli/${idPeliculas}/`);
    }
  
}