import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostedAppartementComponent } from './list-posted-appartement.component';

describe('ListPostedAppartementComponent', () => {
  let component: ListPostedAppartementComponent;
  let fixture: ComponentFixture<ListPostedAppartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPostedAppartementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPostedAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
