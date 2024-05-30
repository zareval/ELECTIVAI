import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesEditarComponent } from './series-editar.component';

describe('SeriesEditarComponent', () => {
  let component: SeriesEditarComponent;
  let fixture: ComponentFixture<SeriesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeriesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
