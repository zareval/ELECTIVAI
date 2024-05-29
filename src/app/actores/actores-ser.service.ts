import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actores } from './actores';


const API_URL=''

@Injectable({
  providedIn: 'root'
})
export class ActoresSerService{
constructor(private http:HttpClient){}

    listarActor():Observable<Actores[]>{
      return this.http.get<Actores[]>(API_URL);
    }
    crearActor(actores:Actores):Observable<Actores>{
      return this.http.post<Actores>(API_URL, actores)
    }
    editarActor(actores:Actores, idActor:number):Observable<Actores>{
      return this.http.put<Actores>('http://127.0.0.1:8000/api/peliculas/actualizacionDirector/1/'+idActor, actores)
    }
    eliminarActor(idActor: number): Observable<Actores> {
      return this.http.delete<Actores>(''+idActor);
    }
  
}