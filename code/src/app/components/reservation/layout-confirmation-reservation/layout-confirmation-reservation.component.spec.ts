import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutConfirmationReservationComponent } from './layout-confirmation-reservation.component';

describe('LayoutConfirmationReservationComponent', () => {
  let component: LayoutConfirmationReservationComponent;
  let fixture: ComponentFixture<LayoutConfirmationReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutConfirmationReservationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutConfirmationReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
