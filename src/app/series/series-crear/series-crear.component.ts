import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Series } from '../series';
import { SeriesService } from '../series.service';


@Component({
  selector: 'app-crear-series',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './crear-series.component.html',
  styleUrl: './crear-series.component.css'
})
export class seriesCrearComponent implements OnInit {
  seriesForm!: FormGroup;
  constructor(private formBuilder : FormBuilder, private SeriesService: SeriesService){}

  ngOnInit(): void {
      this.seriesForm = this.formBuilder.group({
        nombre: ['', [Validators.required]],
        nacionalidad: ['',[Validators.required]],
        f_nacimiento: ['',[Validators.required]],
        biografia: ['',[Validators.required]],
      })
  }

  crearSeries(series: Series):void{
    this.SeriesService.crearSeries(series).subscribe(
      (seriesCreada)=> {
        alert('series creada con éxito');
        this.seriesForm.reset();
      },
    );
  }

}