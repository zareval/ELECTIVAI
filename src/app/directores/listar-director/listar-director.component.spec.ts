import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDirectorComponent } from './listar-director.component';

describe('ListarDirectorComponent', () => {
  let component: ListarDirectorComponent;
  let fixture: ComponentFixture<ListarDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarDirectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
