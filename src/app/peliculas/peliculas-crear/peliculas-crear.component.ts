import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Peliculas } from '../peliculas';
import { PeliculasService } from '../peliculas.service';  
import { CommonModule } from '@angular/common';


@Component({
  selector: 'peliculas crear',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './peliculas-crear.component.html',
  styleUrl: './peliculas-crear.component.css'
})
export class PeliculasCrearComponent implements OnInit {
  peliculasForm!: FormGroup;
  constructor(private formBuilder : FormBuilder, private PeliculasService: PeliculasService,private router: Router){}

  ngOnInit(): void{
    this.peliculasForm = this.formBuilder.group({
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
  crearPeliculas(peliculas: Peliculas): void {
    this.PeliculasService.crearPeliculas(peliculas).subscribe(
      (peliculasCreada) => {
        alert('Pelicula creada con éxito');
        this.peliculasForm.reset();
        this.router.navigate(['/listarPeliculas']);
      },
    );
  }

}