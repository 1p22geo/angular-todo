import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatList, MatListItem, MatListModule } from '@angular/material/list';
import {
  MatCardModule,
  MatCardHeader,
  MatCardContent,
  MatCard,
} from '@angular/material/card';

@Component({
  selector: 'app-about',
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
    MatSidenavModule,
    MatList,
    MatListItem,
    MatListModule,
    MatCardModule,
    MatCardHeader,
    MatCardContent,
    MatCard,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  expanded: boolean = false;
  toggleExpand() {
    this.expanded = !this.expanded;
  }
}
