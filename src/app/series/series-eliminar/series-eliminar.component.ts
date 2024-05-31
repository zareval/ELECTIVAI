import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Series } from '../series';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-eliminar-serie',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './series-eliminar.component.html', // Verifica que esta ruta esté correcta
  styleUrls: ['./series-eliminar.component.css']
})
export class seriesEliminarComponent implements OnInit {
  serieForm!: FormGroup;
  id!: number;

  constructor(private formBuilder: FormBuilder, private SerieService: SeriesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.serieForm = this.formBuilder.group({
      id: [this.id, [Validators.required]]
    })
  }

  eliminarSerie(serie: Series): void {
    this.SerieService.eliminarSeries(serie.idSeries).subscribe(
      () => {
        alert('serie eliminado con éxito');
        this.router.navigate(['/serie']);
      }
    );
  }

}