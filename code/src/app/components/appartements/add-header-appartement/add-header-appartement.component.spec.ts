import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHeaderAppartementComponent } from './add-header-appartement.component';

describe('AddHeaderAppartementComponent', () => {
  let component: AddHeaderAppartementComponent;
  let fixture: ComponentFixture<AddHeaderAppartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddHeaderAppartementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddHeaderAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
