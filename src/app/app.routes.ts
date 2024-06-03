import { Routes } from '@angular/router';
import { PeliculasCrearComponent } from './peliculas/peliculas-crear/peliculas-crear.component';
import { EditarPeliculaComponent } from './peliculas/peliculas-editar/peliculas-editar.component';
import { PeliculasListarComponent } from './peliculas/peliculas-listar/peliculas-listar.component';
import { SeriesCrearComponent } from './series/series-crear/series-crear.component';
import { EditarSerieComponent } from './series/series-editar/series-editar.component';
import { SeriesListarComponent } from './series/serie-listar/serie-listar.component';

export const routes: Routes = [
    { path: '', redirectTo: '/listarPeliculas', pathMatch: 'full' },
    { path: 'crearPelicula', component: PeliculasCrearComponent },
    { path: 'editarPelicula/:id', component: EditarPeliculaComponent },
    { path: 'listarPeliculas', component: PeliculasListarComponent },

    { path: 'crearSeries', component: SeriesCrearComponent },
    { path: 'editarSerie/:id', component: EditarSerieComponent },
    { path: 'listarSeries', component: SeriesListarComponent },
    
];
