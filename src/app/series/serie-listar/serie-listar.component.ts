import { Component } from '@angular/core';
import { Series } from '../series';
import { SeriesService } from '../series.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-listar-serie',
  standalone: true,
  imports: [],
  templateUrl: './listar-serie.component.html',
  styleUrl: './listar-serie.component.css'
})
export class seriesListarComponent {
  serie :Array<Series>=[]
a: any;
  constructor(private routerPath: Router,private seriesService:SeriesService){

  }

  ngOnInit(){
    this.listarPelicula();
  }

  listarPelicula(){
    this.seriesService.listarSeries().subscribe(vs=>{
      this.serie=vs;
      console.log(this.serie)
    })
  }

  onEditarNavigate(id:number){
    this.routerPath.navigate([`/vehiculos/editar/${id}`]);
  }

}
