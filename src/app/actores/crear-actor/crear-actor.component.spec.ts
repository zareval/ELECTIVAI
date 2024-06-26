import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActorComponent } from './crear-actor.component';
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

describe('CrearActorComponent', () => {
  let component: CrearActorComponent;
  let fixture: ComponentFixture<CrearActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearActorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
