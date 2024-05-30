import { ComponentFixture, TestBed } from '@angular/core/testing';

import { seriesEditarComponent } from './series-editar.component';
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

describe('SeriesEditarComponent', () => {
  let component: seriesEditarComponent;
  let fixture: ComponentFixture<seriesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [seriesEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(seriesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
