import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-todo';
  favorite = false;
  get icon_color() {
    return this.favorite ? 'accent' : undefined;
  }
  toggleFavorite() {
    this.favorite = !this.favorite;
  }
}
