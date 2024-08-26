import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedAppartementComponent } from './posted-appartement.component';

describe('PostedAppartementComponent', () => {
  let component: PostedAppartementComponent;
  let fixture: ComponentFixture<PostedAppartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostedAppartementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostedAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
