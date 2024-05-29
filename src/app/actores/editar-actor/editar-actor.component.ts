import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Actores } from '../actores';
import {ActoresSerService} from '../actores-ser.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-actor',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent implements OnInit {
  actoresForm!: FormGroup;
  actores:Actores=new Actores(1,'','','','');
  idActor:string='';
  constructor(private formBuilder: FormBuilder)ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    private route: ActivatedRoute,private ActoresSerService:ActoresSerService){
      this.idActor=this.route.snapshot.params['id'];
      console.log('este es el id del actor'+ this.idActor)
      this.ActoresSerService.listarActor(parseInt(this.idActor)).subscribe((ac)=>{
        this.actores=ac;
        console.log(this.actores);
        this.iniForm()
      });

      this.actoresForm = this.formBuilder.group({
        nombre: [this.actores.nombre,[Validators.required]],
        nacionalidad: [this.actores.nacionalidad, [Validators.required]],
        fecha_nacimiento: [this.actores.f_nacimiento, [Validators.required]],
        biografia: [this.actores.biografia, [Validators.required]]
      })
    }
  
    ngOnInit(){

    }

    initForm(){
      this.actoresForm = this.formBuilder.group({
        nombre: [this.actores?.nombre || '',[Validators.required]],
        nacionalidad: [this.actores?.nacionalidad || '',[Validators.required]],
        fecha_nacimiento: [this.actores?.f_nacimiento || '',[Validators.required]],
        biografia: [this.actores?.biografia || '',[Validators.required]],
      })
    }

    actualizarActor(actores: Actores): void {
      this.ActoresSerService.editarActor(actores,this.actores.id).subscribe((actores)=>{
        alert('registro actualizado con èxito');
      });
  
    }
}
