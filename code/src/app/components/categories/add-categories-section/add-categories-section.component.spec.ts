import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoriesSectionComponent } from './add-categories-section.component';

describe('AddCategoriesSectionComponent', () => {
  let component: AddCategoriesSectionComponent;
  let fixture: ComponentFixture<AddCategoriesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCategoriesSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCategoriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
