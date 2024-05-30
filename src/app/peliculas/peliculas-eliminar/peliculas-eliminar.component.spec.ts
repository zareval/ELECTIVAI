import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasEliminarComponent } from './peliculas-eliminar.component';

describe('PeliculasEliminarComponent', () => {
  let component: PeliculasEliminarComponent;
  let fixture: ComponentFixture<PeliculasEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculasEliminarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeliculasEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
