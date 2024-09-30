import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  host: {
    class: 'flex w-screen h-screen',
  },
})
export class AppComponent {
  title = 'app';
}
