import { Component } from '@angular/core';
import { Book } from '../shared/book';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BookComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  books: Book[] = [];

  constructor() {
    this.books = [
      {
        title: 'Angular',
        isbn: '123',
        description: 'Grundlagen und mehr',
        rating: 5,
        price: 42.9
      },
      {
        title: 'Vue.js',
        isbn: '456',
        description: 'Das grüne Framework',
        rating: 3,
        price: 36.9
      }
    ];
  }
}

