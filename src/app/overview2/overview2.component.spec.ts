import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Overview2Component } from './overview2.component';

describe('Overview2Component', () => {
  let component: Overview2Component;
  let fixture: ComponentFixture<Overview2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Overview2Component]
    });
    fixture = TestBed.createComponent(Overview2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
