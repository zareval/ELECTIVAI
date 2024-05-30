import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Directores } from '../directores';
import { DirectoresService } from '../directores.service';

@Component({
  selector: 'app-editar-director',
  standalone: true,
  imports: [ReactiveFormsModule], // Assuming you're using Reactive Forms
  templateUrl: './editar-director.component.html',
  styleUrls: ['./editar-director.component.css']
})
export class EditarDirectorComponent implements OnInit {
  directoresForm!: FormGroup;
  directores!: Directores;
  idDirector: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private DirectoresService: DirectoresService
  ) {
    this.idDirector = this.route.snapshot.params['idDirector'];
  }

  ngOnInit(): void {
    this.DirectoresService.listarDirector().subscribe(di => {
      this.directores = di.find(Director =>Director.idDirector === parseInt(this.idDirector))!; // Get the specific director based on the id
      this.initForm();
    });
  }

  initForm() {
    this.directoresForm = this.formBuilder.group({
      nombre: [this.directores?.nombre || '', [Validators.required]],
      nacionalidad: [this.directores?.nacionalidad || '', [Validators.required]],
      fecha_nacimiento: [this.directores?.f_nacimiento || '', [Validators.required]],
      biografia: [this.directores?.biografia || '', [Validators.required]],
    });
  }

  actualizarDirector(directores: Directores): void {
    this.DirectoresService.editarDirector(directores, this.directores.idDirector).subscribe((directores) => {
      alert('Registro actualizado con éxito');
    });
  }
}