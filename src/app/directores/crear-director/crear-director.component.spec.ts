import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreardirectorComponent } from './crear-director.component';
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

describe('CrearDirectorComponent', () => {
  let component: CreardirectorComponent;
  let fixture: ComponentFixture<CreardirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreardirectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreardirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
