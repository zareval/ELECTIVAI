import { Component, OnInit } from '@angular/core';
import { Series } from '../series';
import { SeriesService } from '../series.service';
import { Router, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-series-listar',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './serie-listar.component.html',
  styleUrls: ['./serie-listar.component.css']
})
export class SeriesListarComponent implements OnInit {
  series: Series[] = [];

  constructor(private router: Router, private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.obtenerSeries();
  }

  obtenerSeries() {
    this.seriesService.listarSeries().subscribe(
      series => {
        this.series = series;
      },
      error => {
        console.error('Error al obtener las Series:', error);
      }
    );
  }

  editarSerie(idSeries: number) {
    this.router.navigate(['/editarSerie', idSeries]);
  }
}
