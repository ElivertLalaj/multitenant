import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitDashboardComponent } from './unit-dashboard.component';

describe('UnitDashboardComponent', () => {
  let component: UnitDashboardComponent;
  let fixture: ComponentFixture<UnitDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
