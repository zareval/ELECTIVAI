import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Actores } from '../actores';
import { ActoresSerService } from '../actores-ser.service';


@Component({
  selector: 'app-crear-actor',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css'
})
export class CrearActorComponent implements OnInit {
  actorForm!: FormGroup;
  constructor(private formBuilder : FormBuilder, private actoresSerService: ActoresSerService){}

  ngOnInit(): void {
      this.actorForm = this.formBuilder.group({
        nombre: ['', [Validators.required]],
        nacionalidad: ['',[Validators.required]],
        f_nacimiento: ['',[Validators.required]],
        biografia: ['',[Validators.required]],
      })
  }

  crearActor(actores: Actores):void{
    this.actoresSerService.crearActor(actores).subscribe(
      (actorCreado)=> {
        alert('Actor creado con éxito');
        this.actorForm.reset();
      },
    );
  }

}