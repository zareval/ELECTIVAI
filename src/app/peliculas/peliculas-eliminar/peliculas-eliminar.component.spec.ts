import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPeliculaComponent } from './peliculas-eliminar.component';
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
describe('EliminarPeliculaComponent', () => {
  let component: EliminarPeliculaComponent;
  let fixture: ComponentFixture<EliminarPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarPeliculaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
