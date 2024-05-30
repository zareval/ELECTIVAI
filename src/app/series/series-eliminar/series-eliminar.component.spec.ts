import { ComponentFixture, TestBed } from '@angular/core/testing';

import { seriesEliminarComponent } from './series-eliminar.component';
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
describe('SeriesEliminarComponent', () => {
  let component: seriesEliminarComponent;
  let fixture: ComponentFixture<seriesEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [seriesEliminarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(seriesEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
