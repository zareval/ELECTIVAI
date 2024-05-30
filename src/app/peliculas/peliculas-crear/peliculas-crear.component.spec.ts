import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasCrearComponent } from './peliculas-crear.component';
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
