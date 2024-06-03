import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Series } from '../series';
import { SeriesService } from '../series.service';  
import { CommonModule } from '@angular/common';


@Component({
  selector: 'series crear',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './series-crear.component.html',
  styleUrl: './series-crear.component.css'
})
export class SeriesCrearComponent implements OnInit {
  seriesForm!: FormGroup;
  constructor(private formBuilder : FormBuilder, private SeriesService: SeriesService,private router: Router){}

  ngOnInit(): void{
    this.seriesForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      genero: ['', [Validators.required, Validators.minLength(3)]],
      duracion: ['', [Validators.required, Validators.minLength(3)]],
      pais:['', [Validators.required, Validators.minLength(4)]],
      f_estreno:['', [Validators.required, Validators.minLength(4)]],
      trailer:['', [Validators.required, Validators.minLength(4)]],
      e_produccion:['', [Validators.required, Validators.minLength(4)]],
      poster:['', [Validators.required, Validators.minLength(4)]],
    })
}
  crearSeries(series: Series): void {
    this.SeriesService.crearSeries(series).subscribe(
      (seriesCreada) => {
        alert('Serie creada con éxito');
        this.seriesForm.reset();
        this.router.navigate(['/listarSeries']);
      },
    );
  }

}