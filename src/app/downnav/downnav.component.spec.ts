import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownnavComponent } from './downnav.component';

describe('DownnavComponent', () => {
  let component: DownnavComponent;
  let fixture: ComponentFixture<DownnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownnavComponent]
    });
    fixture = TestBed.createComponent(DownnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
