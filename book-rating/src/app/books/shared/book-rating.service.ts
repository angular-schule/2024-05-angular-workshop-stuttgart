import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  constructor() { }

  rateUp(book: Book): Book {
    // nicht gut, weil es Immutability verletzt
    // book.rating++;

    // Early Exit
    if (book.rating >= 5) {
      return book;
    }

    return {
      ...book, // Spread Operator
      rating: book.rating + 1
    }
  }

  rateDown(book: Book): Book {
    return {
      ...book,
      // rating: book.rating <= 1 ? 1 : book.rating - 1,
      rating: Math.max(book.rating - 1, 1)
    }
  }



}


