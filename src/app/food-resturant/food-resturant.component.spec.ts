import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodResturantComponent } from './food-resturant.component';

describe('FoodResturantComponent', () => {
  let component: FoodResturantComponent;
  let fixture: ComponentFixture<FoodResturantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodResturantComponent]
    });
    fixture = TestBed.createComponent(FoodResturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
