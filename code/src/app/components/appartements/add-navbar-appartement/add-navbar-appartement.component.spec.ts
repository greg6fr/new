import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNavbarAppartementComponent } from './add-navbar-appartement.component';

describe('AddNavbarAppartementComponent', () => {
  let component: AddNavbarAppartementComponent;
  let fixture: ComponentFixture<AddNavbarAppartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNavbarAppartementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNavbarAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
