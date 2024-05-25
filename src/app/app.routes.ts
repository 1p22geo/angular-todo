import { Routes } from '@angular/router';
import { TodoAppComponent } from './pages/todo-app/todo-app.component';

export const routes: Routes = [
  {
    path: "todoApp",
    component: TodoAppComponent
  },
  {
    path: "", redirectTo: "todoApp", pathMatch: "full"
  }
];
