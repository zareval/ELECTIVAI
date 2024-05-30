import { Component } from '@angular/core';
import { Series } from '../series';
import { SeriesService } from '../series.service';
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
export class seriesListarComponent {
  pelicula :Array<Series>=[]
a: any;
  constructor(private routerPath: Router,private seriesService:SeriesService){

  }

  ngOnInit(){
    this.listarPelicula();
  }

  listarPelicula(){
    this.seriesService.listarSeries().subscribe(vs=>{
      this.pelicula=vs;
      console.log(this.pelicula)
    })
  }

  onEditarNavigate(id:number){
    this.routerPath.navigate([`/vehiculos/editar/${id}`]);
  }

}
