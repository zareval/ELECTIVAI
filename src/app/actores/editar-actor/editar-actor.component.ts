import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Actores } from '../actores';
import { ActoresSerService } from '../actores-ser.service';

@Component({
  selector: 'app-editar-actor',
  standalone: true,
  imports: [ReactiveFormsModule], // Assuming you're using Reactive Forms
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {
  actoresForm!: FormGroup;
  actores!: Actores;
  idActor: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private actoresSerService: ActoresSerService
  ) {
    this.idActor = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.actoresSerService.listarActor().subscribe(ac => {
      this.actores = ac.find(actor => actor.idActor === parseInt(this.idActor))!; // Get the specific actor based on the id
      this.initForm();
    });
  }

  initForm() {
    this.actoresForm = this.formBuilder.group({
      nombre: [this.actores?.nombre || '', [Validators.required]],
      nacionalidad: [this.actores?.nacionalidad || '', [Validators.required]],
      fecha_nacimiento: [this.actores?.f_nacimiento || '', [Validators.required]],
      biografia: [this.actores?.biografia || '', [Validators.required]],
    });
  }

  actualizarActor(actores: Actores): void {
    this.actoresSerService.editarActor(actores, this.actores.idActor).subscribe((actores) => {
      alert('Registro actualizado con éxito');
    });
  }
}