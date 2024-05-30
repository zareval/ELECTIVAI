import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Actores } from '../actores';
import { ActoresSerService } from '../actores-ser.service';

@Component({
  selector: 'app-eliminar-actor',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './eliminar-actor.component.html',
  styleUrls: ['./eliminar-actor.component.css']
})
export class EliminarActorComponent implements OnInit {
  actorForm!: FormGroup;
  id!: number;

  constructor(private formBuilder: FormBuilder, private actoresSerService: ActoresSerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.actorForm = this.formBuilder.group({
      id: [this.id, [Validators.required]]
    })
  }

  eliminarActor(actor: Actores): void {
    this.actoresSerService.eliminarActor(actor.idActor).subscribe(
      () => {
        alert('Actor eliminado con éxito');
        this.router.navigate(['/actores']);
      }
    );
  }

}