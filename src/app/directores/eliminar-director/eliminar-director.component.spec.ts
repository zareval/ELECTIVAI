import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDirectorComponent } from './eliminar-director.component';
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
describe('EliminarDirectorComponent', () => {
  let component: EliminarDirectorComponent;
  let fixture: ComponentFixture<EliminarDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarDirectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
