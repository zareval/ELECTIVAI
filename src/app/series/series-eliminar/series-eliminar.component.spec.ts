import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesEliminarComponent } from './series-eliminar.component';

describe('SeriesEliminarComponent', () => {
  let component: SeriesEliminarComponent;
  let fixture: ComponentFixture<SeriesEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesEliminarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeriesEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
