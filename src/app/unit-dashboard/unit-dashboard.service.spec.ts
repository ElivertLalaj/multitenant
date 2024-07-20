import { TestBed } from '@angular/core/testing';

import { UnitDashboardService } from './unit-dashboard.service';

describe('UnitDashboardService', () => {
  let service: UnitDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnitDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
