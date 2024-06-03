import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SeriesService } from '../series.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Series } from '../series';

@Component({
  selector: 'editar-pelicula-app',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './series-editar.component.html',
  styleUrls: ['./series-editar.component.css']
})
export class EditarSerieComponent implements OnInit {
  serieForm!: FormGroup;
  serie: Series = new Series(1, '', '', '', '', '', '','','');
  id: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private seriesService: SeriesService,
    private router: Router 
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.seriesService.detallesSerie(parseInt(this.id)).subscribe((ve: any) => {
      this.serie = ve;
      this.initForm();
    });
  }

  initForm() {
    this.serieForm = this.formBuilder.group({
      nombre: [this.serie.nombre, [Validators.required, Validators.minLength(3)]],
      genero: [this.serie.genero, [Validators.required]],
      duracion: [this.serie.duracion, [Validators.required, Validators.minLength(2)]],
      pais: [this.serie.pais, [Validators.required, Validators.minLength(4)]],
      f_estreno: [this.serie.f_estreno, [Validators.required, Validators.minLength(4)]],
      trailer: [this.serie.trailer, [Validators.required, Validators.minLength(4)]],
      e_produccion: [this.serie.e_produccion, [Validators.required, Validators.minLength(4)]],
      poster: [this.serie.poster, [Validators.required, Validators.minLength(4)]],
    });
  }

  editarSerie(): void {
    if (this.serieForm.valid) {
      const updatedSerie = { ...this.serie, ...this.serieForm.value };
      this.seriesService.editarSerie(updatedSerie, this.serie.id).subscribe((vehi: any) => {
        alert('Registro actualizado con éxito');
        this.router.navigate(['/listarSeries']);
      },
      error => {
        console.error('Error al actualizar la serie:', error);
        alert('Error al actualizar la serie.');
      });
    }
  }

  eliminarSerie(): void {
    this.seriesService.eliminarSeries(this.serie.id).subscribe(() => {
      alert('Serie eliminada con éxito');
      this.router.navigate(['/listarSeries']);
    },
    error => {
      console.error('Error al eliminar la película:', error);
      alert('Error al eliminar la película.');
    });
  }
}
