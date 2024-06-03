import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../peliculas.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Peliculas } from '../peliculas';

@Component({
  selector: 'editar-pelicula-app',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './peliculas-editar.component.html',
  styleUrls: ['./peliculas-editar.component.css']
})
export class EditarPeliculaComponent implements OnInit {
  peliculaForm!: FormGroup;
  pelicula: Peliculas = new Peliculas(1, '', '', '', '', '', '','','');
  id: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private peliculasService: PeliculasService,
    private router: Router 
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.peliculasService.detallesPelicula(parseInt(this.id)).subscribe((ve: any) => {
      this.pelicula = ve;
      this.initForm();
    });
  }

  initForm() {
    this.peliculaForm = this.formBuilder.group({
      nombre: [this.pelicula.nombre, [Validators.required, Validators.minLength(3)]],
      genero: [this.pelicula.genero, [Validators.required]],
      duracion: [this.pelicula.duracion, [Validators.required, Validators.minLength(2)]],
      pais: [this.pelicula.pais, [Validators.required, Validators.minLength(4)]],
      f_estreno: [this.pelicula.f_estreno, [Validators.required, Validators.minLength(4)]],
      trailer: [this.pelicula.trailer, [Validators.required, Validators.minLength(4)]],
      e_produccion: [this.pelicula.e_produccion, [Validators.required, Validators.minLength(4)]],
      poster: [this.pelicula.poster, [Validators.required, Validators.minLength(4)]],
    });
  }

  editarPelicula(): void {
    if (this.peliculaForm.valid) {
      const updatedPelicula = { ...this.pelicula, ...this.peliculaForm.value };
      this.peliculasService.editarPelicula(updatedPelicula, this.pelicula.id).subscribe((vehi: any) => {
        alert('Registro actualizado con éxito');
        this.router.navigate(['/listarPeliculas']);
      },
      error => {
        console.error('Error al actualizar la película:', error);
        alert('Error al actualizar la película.');
      });
    }
  }

  eliminarPelicula(): void {
    this.peliculasService.eliminarPeliculas(this.pelicula.id).subscribe(() => {
      alert('Pelicula eliminada con éxito');
      this.router.navigate(['/listarPeliculas']);
    },
    error => {
      console.error('Error al eliminar la película:', error);
      alert('Error al eliminar la película.');
    });
  }
}
