import { ActoresSerService } from "./actores-ser.service";
import { TestBed } from "@angular/core/testing";

describe('ActoresSerService', () => {
  let service: ActoresSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActoresSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
