import { Component, Output, OutputEmitterRef } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { Todo } from '../../lib/todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButton,
    MatButtonModule,
  ],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss',
})
export class AddTodoComponent {
  @Output() addTodo = new OutputEmitterRef<Todo>();
  title = new FormControl('');
  desc = new FormControl('');
  date = new FormControl('');
  clearForm() {
    this.title.setValue('');
    this.desc.setValue('');
    this.date.setValue('');
  }
  submitForm() {
    if (!this.title.value) return;
    if (!this.date.value) return;
    this.addTodo.emit({
      title: this.title.value,
      content: this.desc.value,
      date: new Date(this.date.value),
      favorite: false,
    });
    this.clearForm();
  }
}
