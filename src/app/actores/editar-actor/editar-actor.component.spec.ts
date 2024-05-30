import { ComponentFixture, TestBed } from '@angular/core/testing';


import {RouterTestingModule} from '@angular/router/testing'
import { AppComponent } from '../../app.component';
import { EditarActorComponent } from './editar-actor.component';

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

describe('EditarActorComponent', () => {
  let component: EditarActorComponent;
  let fixture: ComponentFixture<EditarActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarActorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

