import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlValidationComponent } from './control-validation.component';

describe('ControlValidationComponent', () => {
  let component: ControlValidationComponent;
  let fixture: ComponentFixture<ControlValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
