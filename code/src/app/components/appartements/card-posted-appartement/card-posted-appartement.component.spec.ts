import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPostedAppartementComponent } from './card-posted-appartement.component';

describe('CardPostedAppartementComponent', () => {
  let component: CardPostedAppartementComponent;
  let fixture: ComponentFixture<CardPostedAppartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPostedAppartementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPostedAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
