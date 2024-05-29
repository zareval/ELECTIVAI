import { Component } from '@angular/core';
import { Actores } from '../actores';
import { ActoresSerService } from '../actores-ser.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-listar-actor',
  standalone: true,
  imports: [],
  templateUrl: './listar-actor.component.html',
  styleUrl: './listar-actor.component.css'
})
export class ListarActorComponent {
  actores :Array<Actores>=[]
  constructor(private routerPath: Router,private ActoresSerService:ActoresSerService){

  }

  ngOnInit(){
    this.listarActor();
  }

  listarActor(){
    this.ActoresSerService.listarActor().subscribe(vs=>{
      this.actores=vs;
      console.log(this.actores)
    })
  }

  onEditarNavigate(id:number){
    this.routerPath.navigate([`/vehiculos/editar/${id}`]);
  }

}
