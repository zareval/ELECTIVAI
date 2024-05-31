import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Series } from '../series';
import { SeriesService } from '../series.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-series-editar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './series-editar.component.html',
  styleUrl: './series-editar.component.css'
})
export class SeriesEditarComponent implements OnInit {
  seriesForm!: FormGroup;
  series!: Series;
  idseries: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private SeriesService: SeriesService
  ) {
    this.idseries = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.SeriesService.listarSeries().subscribe(pe => {
      this.series = pe.find(Series => Series.idSeries === parseInt(this.idseries))!; // Get the specific series based on the id
      this.initForm();
    });
  }

  initForm() {
    this.seriesForm = this.formBuilder.group({
      nombre: [this.series?.nombre || '', [Validators.required]],
      genero: [this.series?.genero || '', [Validators.required]],
      duracion: [this.series?.duracion || '', [Validators.required]],
      pais: [this.series?.pais || '', [Validators.required]],
      f_estreno: [this.series?.f_estreno || '', [Validators.required]],
      trailer:[this.series?.trailer || '', [Validators.required]],
      poster: [this.series?.poster || '', [Validators.required]],
      director: [this.series?.director || '', [Validators.required]],
      protagonistas: [this.series?.protagonistas || '', [Validators.required]],
    });
  }

  actualizarseries(series: Series): void {
    this.SeriesService.editarSeries(series, this.series.idSeries).subscribe((series) => {
      alert('Registro actualizado con éxito');
    });
  }
}
