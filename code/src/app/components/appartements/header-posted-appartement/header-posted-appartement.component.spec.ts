import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPostedAppartementComponent } from './header-posted-appartement.component';

describe('HeaderPostedAppartementComponent', () => {
  let component: HeaderPostedAppartementComponent;
  let fixture: ComponentFixture<HeaderPostedAppartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderPostedAppartementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderPostedAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
