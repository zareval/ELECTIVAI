import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Directores } from '../directores';
import { DirectoresService} from '../directores.service';

@Component({
  selector: 'app-eliminar-director',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './eliminar-director.component.html',
  styleUrls: ['./eliminar-director.component.css']
})
export class EliminarDirectorComponent implements OnInit {
  directorForm!: FormGroup;
  id!: number;

  constructor(private formBuilder: FormBuilder, private DirectoresService: DirectoresService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.directorForm = this.formBuilder.group({
      id: [this.id, [Validators.required]]
    })
  }

  eliminarDirector(Director: Directores): void {
    this.DirectoresService.eliminarDirector(Director.idDirector).subscribe(
      () => {
        alert('director eliminado con éxito');
        this.router.navigate(['/director']);
      }
    );
  }

}