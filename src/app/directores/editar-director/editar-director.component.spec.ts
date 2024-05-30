import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDirectorComponent } from './editar-director.component';

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
describe('EditarDirectorComponent', () => {
  let component: EditarDirectorComponent;
  let fixture: ComponentFixture<EditarDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarDirectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
