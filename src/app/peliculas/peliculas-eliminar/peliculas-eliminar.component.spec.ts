import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasEliminarComponent } from './peliculas-eliminar.component';
import { RouterTestingModule } from '@angular/router/testing';
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
