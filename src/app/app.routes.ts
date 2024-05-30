import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CrearActorComponent } from './actores/crear-actor/crear-actor.component';
import { ListarActorComponent } from './actores/listar-actor/listar-actor.component';
import { EditarActorComponent } from './actores/editar-actor/editar-actor.component';
import { EliminarActorComponent } from './actores/eliminar-actor/eliminar-actor.component';
import { CreardirectorComponent } from './directores/crear-director/crear-director.component';
import { ListarDirectorComponent } from './directores/listar-director/listar-director.component';
import { EditarDirectorComponent } from './directores/editar-director/editar-director.component';
import { EliminarDirectorComponent } from './directores/eliminar-director/eliminar-director.component';

export const routes: Routes = [
    {
     path:'listarActor',
     component:ListarActorComponent,
    },
    {
        path:'crearActor',
        component:CrearActorComponent,
    },
    {
        path:'editarActor',
        component:EditarActorComponent,
    },
    {
        path:'eliminarActor',
        component:EliminarActorComponent,
    },
    {
        path:'eliminarActor',
        component:EliminarActorComponent,
    },
    {
        path:'listarDirector',
        component:ListarDirectorComponent,
    },
    {
        path:'crearDirector',
        component:CreardirectorComponent,
    },
    {
        path:'editarDirector',
        component:EditarDirectorComponent,
    },
    {
        path:'eliminarDirector',
        component:EliminarDirectorComponent
    },
];
