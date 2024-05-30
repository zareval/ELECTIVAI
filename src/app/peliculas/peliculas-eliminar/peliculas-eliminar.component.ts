import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Peliculas } from '../peliculas';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-eliminar-pelicula',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './eliminar-pelicula.component.html',
  styleUrls: ['./eliminar-pelicula.component.css']
})
export class PeliculasEliminarComponent implements OnInit {
  peliculaForm!: FormGroup;
  id!: number;

  constructor(private formBuilder: FormBuilder, private peliculaService: PeliculasService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.peliculaForm = this.formBuilder.group({
      id: [this.id, [Validators.required]]
    })
  }

  eliminarPelicula(pelicula: Peliculas): void {
    this.peliculaService.eliminarPeliculas(pelicula.idPelicula).subscribe(
      () => {
        alert('pelicula eliminado con éxito');
        this.router.navigate(['/pelicula']);
      }
    );
  }

}