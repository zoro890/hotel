import { Component } from '@angular/core';


@Component({
  selector: 'app-dark',
  templateUrl: './dark.component.html',
  styleUrls: ['./dark.component.css']
})

export class DarkComponent {
   myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
}

