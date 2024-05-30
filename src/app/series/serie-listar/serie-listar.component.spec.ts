import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesCrearComponent } from './serie-listar.component';
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
describe('SerieListarComponent', () => {
  let component: SeriesCrearComponent;
  let fixture: ComponentFixture<SeriesCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesCrearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeriesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
