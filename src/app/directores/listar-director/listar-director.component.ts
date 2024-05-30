import { Component } from '@angular/core';
import { Directores } from '../directores';
import { DirectoresService } from '../directores.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-listar-director',
  standalone: true,
  imports: [],
  templateUrl: './listar-director.component.html',
  styleUrl: './listar-director.component.css'
})
export class ListarDirectorComponent {
  directores :Array<Directores>=[]
a: any;
  constructor(private routerPath: Router,private DirectoresService:DirectoresService){

  }

  ngOnInit(){
    this.listarDirector();
  }

  listarDirector(){
    this.DirectoresService.listarDirector().subscribe(vs=>{
      this.directores=vs;
      console.log(this.directores)
    })
  }

  onEditarNavigate(id:number){
    this.routerPath.navigate([`/directores/listar-director/${id}`]);
  }

}
