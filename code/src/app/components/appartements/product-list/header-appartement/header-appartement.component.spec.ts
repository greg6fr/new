import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAppartementComponent } from './header-appartement.component';

describe('HeaderAppartementComponent', () => {
  let component: HeaderAppartementComponent;
  let fixture: ComponentFixture<HeaderAppartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderAppartementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
