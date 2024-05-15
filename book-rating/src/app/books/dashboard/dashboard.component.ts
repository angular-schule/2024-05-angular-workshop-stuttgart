import { Component, inject } from '@angular/core';
import { Book } from '../shared/book';
import { BookComponent } from '../book/book.component';
import { BookRatingService } from '../shared/book-rating.service';
import { JsonPipe } from '@angular/common';
import { DateComponent } from '../date/date.component';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BookComponent, JsonPipe, DateComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  books: Book[] = [];

  // Alternative zu Constructor Injection
  // private rs2 = inject(BookRatingService);

  // Constructor Shorthand:
  // Property "rs" wird angelegt und zugewiesen
  constructor(
    private rs: BookRatingService,
    private bs: BookStoreService) {

    this.bs.getAll().subscribe(books => {
      this.books = books;
    });
  }

  doRateUpx(book: Book) {
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

    // this.books = this.books.map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
  }
}


// Ternary Operator // Ternäroperator
// const result = condition ? value1 : value2;



// [1,2,3,4,5].map(value => value * 10) // [10, 20, 30, 40, 50]
// [1,2,3,4,5,6,7,8,9,10].filter(value => value < 5) // [1,2,3,4]
