import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartementsListComponent } from './appartements-list.component';

describe('AppartementsListComponent', () => {
  let component: AppartementsListComponent;
  let fixture: ComponentFixture<AppartementsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppartementsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppartementsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
