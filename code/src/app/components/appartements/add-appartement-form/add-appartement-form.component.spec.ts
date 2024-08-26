import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppartementFormComponent } from './add-appartement-form.component';

describe('AddAppartementFormComponent', () => {
  let component: AddAppartementFormComponent;
  let fixture: ComponentFixture<AddAppartementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAppartementFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAppartementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
