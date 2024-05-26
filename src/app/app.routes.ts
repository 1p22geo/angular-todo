import { Routes } from '@angular/router';
import { TodoAppComponent } from './pages/todo-app/todo-app.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: TodoAppComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
