import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarReservationComponent } from './navbar-reservation.component';

describe('NavbarReservationComponent', () => {
  let component: NavbarReservationComponent;
  let fixture: ComponentFixture<NavbarReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarReservationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
