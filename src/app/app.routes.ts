import { Routes } from '@angular/router';
import { TodoAppComponent } from './pages/todo-app/todo-app.component';

export const routes: Routes = [
  {
    path: "angular-todo/todoApp",
    component: TodoAppComponent
  },
  {
    path: "", redirectTo: "/angular-todo/todoApp", pathMatch: "full"
  },
  {
    path: "**", redirectTo: "/angular-todo/todoApp"
  }

];
