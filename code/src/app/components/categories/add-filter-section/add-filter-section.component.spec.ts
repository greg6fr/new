import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilterSectionComponent } from './add-filter-section.component';

describe('AddFilterSectionComponent', () => {
  let component: AddFilterSectionComponent;
  let fixture: ComponentFixture<AddFilterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddFilterSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFilterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
