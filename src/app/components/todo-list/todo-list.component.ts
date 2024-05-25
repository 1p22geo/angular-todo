import { Component } from '@angular/core';
import { Todo } from '../../lib/todo';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import {
  MatButton,
  MatButtonModule,
  MatIconButton,
} from '@angular/material/button';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    AddTodoComponent,
    MatListModule,
    MatIcon,
    MatButtonModule,
    MatButton,
    MatIconButton,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  todos: Todo[] = [];
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  dateSummary(date: Date) {
    return `${date.getTime() < Date.now() ? 'OVERDUE' : 'due in'} ${date.toLocaleString()}`;
  }
  deleteTodo(todo: Todo) {
    const ix = this.todos.indexOf(todo);
    if (ix >= 0) this.todos.splice(ix, 1);
  }
  toggleFavoriteTodo(todo: Todo) {
    const ix = this.todos.indexOf(todo);
    if (ix >= 0) this.todos[ix].favorite = !this.todos[ix].favorite
  }
}
