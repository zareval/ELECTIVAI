import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarActorComponent } from './listar-actor.component';

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
