import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNavbarCategoryComponent } from './add-navbar-category.component';

describe('AddNavbarCategoryComponent', () => {
  let component: AddNavbarCategoryComponent;
  let fixture: ComponentFixture<AddNavbarCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNavbarCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNavbarCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
