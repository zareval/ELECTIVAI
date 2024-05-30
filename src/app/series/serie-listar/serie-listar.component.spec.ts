import { ComponentFixture, TestBed } from '@angular/core/testing';

import { seriesListarComponent } from './serie-listar.component';
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
  let component: seriesListarComponent;
  let fixture: ComponentFixture<seriesListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [seriesListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(seriesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
