import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasCrearComponent } from './peliculas-crear.component';

describe('PeliculasCrearComponent', () => {
  let component: PeliculasCrearComponent;
  let fixture: ComponentFixture<PeliculasCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculasCrearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeliculasCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
