import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h1 {
      color: green;
    }
  `]
})
export class AppComponent {
  title = 'Container monitoring';
}
