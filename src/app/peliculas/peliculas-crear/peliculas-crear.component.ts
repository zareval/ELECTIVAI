import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Peliculas } from '../peliculas';
import { PeliculasService } from '../peliculas.service';


@Component({
  selector: 'app-crear-peliculas',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './crear-peliculas.component.html',
  styleUrl: './crear-peliculas.component.css'
})
export class PeliculasCrearComponent implements OnInit {
  peliculasForm!: FormGroup;
  constructor(private formBuilder : FormBuilder, private PeliculasService: PeliculasService){}

  ngOnInit(): void {
      this.peliculasForm = this.formBuilder.group({
        nombre: ['', [Validators.required]],
        nacionalidad: ['',[Validators.required]],
        f_nacimiento: ['',[Validators.required]],
        biografia: ['',[Validators.required]],
      })
  }

  crearPeliculas(Peliculas: Peliculas):void{
    this.PeliculasService.crearPeliculas(Peliculas).subscribe(
      (peliculasCreada)=> {
        alert('peliculas creada con éxito');
        this.peliculasForm.reset();
      },
    );
  }

}