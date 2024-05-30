import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarActorComponent } from './listar-actor.component';
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
describe('ListarActorComponent', () => {
  let component: ListarActorComponent;
  let fixture: ComponentFixture<ListarActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarActorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
