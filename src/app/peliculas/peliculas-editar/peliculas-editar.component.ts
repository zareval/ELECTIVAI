import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Peliculas } from '../peliculas';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-editar-peliculas',
  standalone: true,
  imports: [ReactiveFormsModule], // Assuming you're using Reactive Forms
  templateUrl: './editar-peliculas.component.html',
  styleUrls: ['./editar-peliculas.component.css']
})
export class PeliculasEditarComponent implements OnInit {
  PeliculasForm!: FormGroup;
  Peliculas!: Peliculas;
  idPeliculas: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private PeliculasService: PeliculasService
  ) {
    this.idPeliculas = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.PeliculasService.listarPeliculas().subscribe(pe => {
      this.Peliculas = pe.find(Peliculas => Peliculas.idPelicula === parseInt(this.idPeliculas))!; // Get the specific Peliculas based on the id
      this.initForm();
    });
  }

  initForm() {
    this.PeliculasForm = this.formBuilder.group({
      nombre: [this.Peliculas?.nombre || '', [Validators.required]],
      genero: [this.Peliculas?.genero || '', [Validators.required]],
      duracion: [this.Peliculas?.duracion || '', [Validators.required]],
      pais: [this.Peliculas?.pais || '', [Validators.required]],
      f_estreno: [this.Peliculas?.f_estreno || '', [Validators.required]],
      trailer:[this.Peliculas?.trailer || '', [Validators.required]],
      poster: [this.Peliculas?.poster || '', [Validators.required]],
      director: [this.Peliculas?.director || '', [Validators.required]],
      protagonistas: [this.Peliculas?.protagonistas || '', [Validators.required]],
    });
  }

  actualizarPeliculas(peliculas: Peliculas): void {
    this.PeliculasService.editarPeliculas(peliculas, this.Peliculas.idPelicula).subscribe((Peliculas) => {
      alert('Registro actualizado con éxito');
    });
  }
}