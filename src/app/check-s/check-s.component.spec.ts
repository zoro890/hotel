import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckSComponent } from './check-s.component';

describe('CheckSComponent', () => {
  let component: CheckSComponent;
  let fixture: ComponentFixture<CheckSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckSComponent]
    });
    fixture = TestBed.createComponent(CheckSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
