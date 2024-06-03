import { Component, OnInit } from '@angular/core';
import { Peliculas } from '../peliculas';
import { PeliculasService } from '../peliculas.service';
import { Router, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-peliculas-listar',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './peliculas-listar.component.html',
  styleUrls: ['./peliculas-listar.component.css']
})
export class PeliculasListarComponent implements OnInit {
  peliculas: Peliculas[] = [];

  constructor(private router: Router, private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  obtenerPeliculas() {
    this.peliculasService.listarPeliculas().subscribe(
      peliculas => {
        this.peliculas = peliculas;
      },
      error => {
        console.error('Error al obtener las películas:', error);
      }
    );
  }

  editarPelicula(idPeliculas: number) {
    this.router.navigate(['/editarPelicula', idPeliculas]);
  }
}
