import { Component } from '@angular/core';
import { Peliculas } from '../peliculas';
import { PeliculasService } from '../peliculas.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-listar-pelicula',
  standalone: true,
  imports: [],
  templateUrl: './listar-pelicula.component.html',
  styleUrl: './listar-pelicula.component.css'
})
export class PeliculasListarComponent {
  pelicula :Array<Peliculas>=[]
a: any;
  constructor(private routerPath: Router,private PeliculasService:PeliculasService){

  }

  ngOnInit(){
    this.listarPelicula();
  }

  listarPelicula(){
    this.PeliculasService.listarPeliculas().subscribe(vs=>{
      this.pelicula=vs;
      console.log(this.pelicula)
    })
  }

  onEditarNavigate(id:number){
    this.routerPath.navigate([`/vehiculos/editar/${id}`]);
  }

}
