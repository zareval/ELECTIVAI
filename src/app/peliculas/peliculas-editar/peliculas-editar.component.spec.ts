import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasEditarComponent } from './peliculas-editar.component';

describe('PeliculasEditarComponent', () => {
  let component: PeliculasEditarComponent;
  let fixture: ComponentFixture<PeliculasEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculasEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeliculasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
