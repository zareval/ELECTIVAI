import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDirectorComponent } from './eliminar-director.component';

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
