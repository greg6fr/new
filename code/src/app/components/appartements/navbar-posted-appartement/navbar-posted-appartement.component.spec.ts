import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPostedAppartementComponent } from './navbar-posted-appartement.component';

describe('NavbarPostedAppartementComponent', () => {
  let component: NavbarPostedAppartementComponent;
  let fixture: ComponentFixture<NavbarPostedAppartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarPostedAppartementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarPostedAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
