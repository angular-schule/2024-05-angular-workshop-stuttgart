import { Component, inject } from '@angular/core';
import { Book } from '../shared/book';
import { BookComponent } from '../book/book.component';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BookComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  books: Book[] = [];

  // Alternative zu Constructor Injection
  // private rs2 = inject(BookRatingService);

  // Constructor Shorthand:
  // Property "rs" wird angelegt und zugewiesen
  constructor(private rs: BookRatingService) {
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

  doRateUpx(book: Book) {
    // TODO:
    // Service aufrufen
    // Buch kommt zurück
    // Buch in der Liste aktualisieren
    const ratedBook = this.rs.rateUp(book);
    this.updateList(ratedBook);
  }

  doRateDownx(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.updateList(ratedBook);
  }

  private updateList(ratedBook: Book) {
    this.books = this.books.map(b => {
      if (b.isbn === ratedBook.isbn) {
        return ratedBook;
      } else {
        return b;
      }
    })
  }
}



// [1,2,3,4,5].map(value => value * 10) // [10, 20, 30, 40, 50]
// [1,2,3,4,5,6,7,8,9,10].filter(value => value < 5 || value > 9) // [1,2,3,4, 10]
