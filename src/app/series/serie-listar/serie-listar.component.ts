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
export class SeriesCrearComponent implements OnInit {
  seriesForm!: FormGroup;
  constructor(private formBuilder : FormBuilder, private seriesService: SeriesService){}

  ngOnInit(): void {
      this.seriesForm = this.formBuilder.group({
        nombre: ['', [Validators.required]],
        nacionalidad: ['',[Validators.required]],
        f_nacimiento: ['',[Validators.required]],
        biografia: ['',[Validators.required]],
      })
  }

  crearSeries(series: Series):void{
    this.seriesService.crearSeries(series).subscribe(
      (eriesCreada)=> {
        alert('series creada con éxito');
        this.seriesForm.reset();
      },
    );
  }

}