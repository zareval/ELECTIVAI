import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieListarComponent } from './serie-listar.component';

describe('SerieListarComponent', () => {
  let component: SerieListarComponent;
  let fixture: ComponentFixture<SerieListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerieListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SerieListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
