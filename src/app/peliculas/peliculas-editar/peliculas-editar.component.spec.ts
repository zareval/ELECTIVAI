import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasEditarComponent } from './peliculas-editar.component';
import {RouterTestingModule} from '@angular/router/testing'
import { AppComponent } from '../../app.component';


describe('AppComponent',() =>{
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations:[AppComponent]
  }));

  it('should create the app', () =>{
    const fixture = TestBed.createComponent(AppComponent);
    const app= fixture.componentInstance;
    expect(app).toBeTruthy();
  })
})


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
