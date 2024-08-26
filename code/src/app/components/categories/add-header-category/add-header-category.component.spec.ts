import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHeaderCategoryComponent } from './add-header-category.component';

describe('AddHeaderCategoryComponent', () => {
  let component: AddHeaderCategoryComponent;
  let fixture: ComponentFixture<AddHeaderCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddHeaderCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddHeaderCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
