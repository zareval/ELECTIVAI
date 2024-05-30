import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Series } from '../series';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-editar-series',
  standalone: true,
  imports: [ReactiveFormsModule], // Assuming you're using Reactive Forms
  templateUrl: './editar-series.component.html',
  styleUrls: ['./editar-series.component.css']
})
export class seriesEditarComponent implements OnInit {
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