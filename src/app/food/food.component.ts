import { Component } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
