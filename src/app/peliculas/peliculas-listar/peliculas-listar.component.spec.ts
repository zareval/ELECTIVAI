import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasListarComponent } from './peliculas-listar.component';
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
describe('PeliculasListarComponent', () => {
  let component: PeliculasListarComponent;
  let fixture: ComponentFixture<PeliculasListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculasListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeliculasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
