import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
@Component({
  selector: 'app-todo-app',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIcon,
    MatButton,
    MatFabButton,
    MatIcon,
    MatToolbar,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    TodoListComponent,
  ],
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.scss',
})
export class TodoAppComponent {
  title = 'angular-todo';
  favorite = false;
  get icon_color() {
    return this.favorite ? 'accent' : undefined;
  }
  toggleFavorite() {
    this.favorite = !this.favorite;
  }
}