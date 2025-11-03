import { Component } from '@angular/core';

@Component({
  selector: 'app-nested1',
  imports: [],
  templateUrl: './nested1.html',
  styleUrl: './nested1.scss'
})
export class Nested1 {
  title = 'Nested Component 1';
  description = 'This is the first nested component with some content.';

  onButtonClick() {
    alert('Button clicked in Nested Component 1!');
  }
}
