import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesCrearComponent } from './series-crear.component';

describe('SeriesCrearComponent', () => {
  let component: SeriesCrearComponent;
  let fixture: ComponentFixture<SeriesCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesCrearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeriesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
