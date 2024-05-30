import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Directores } from '../directores';
import { DirectoresService } from '../directores.service';


@Component({
  selector: 'app-crear-director',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './crear-director.component.html',
  styleUrl: './crear-director.component.css'
})
export class CreardirectorComponent implements OnInit {
  directorForm!: FormGroup;
  constructor(private formBuilder : FormBuilder, private DirectoresService: DirectoresService){}

  ngOnInit(): void {
      this.directorForm = this.formBuilder.group({
        nombre: ['', [Validators.required]],
        nacionalidad: ['',[Validators.required]],
        f_nacimiento: ['',[Validators.required]],
        biografia: ['',[Validators.required]],
      })
  }

  crearDirector(directores: Directores):void{
    this.DirectoresService.crearDirector(directores).subscribe(
      (directorCreado)=> {
        alert('director creado con éxito');
        this.directorForm.reset();
      },
    );
  }

}
