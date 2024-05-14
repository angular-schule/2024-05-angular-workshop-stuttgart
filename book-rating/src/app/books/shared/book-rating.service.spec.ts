import { TestBed } from '@angular/core/testing';

import { BookRatingService } from './book-rating.service';
import { Book } from './book';

function calc(arg: number) {
  return arg * 10;
}

describe('BookRatingService', () => {
  let service: BookRatingService;
  let book: Book;

  // Arrange
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRatingService);

    book = {
      title: '',
      description: '',
      isbn: '',
      rating: 3,
      price: 100
    };
  });

  it('should multiply by 10', () => {
    // Arrange

    // Act
    const result = calc(8);

    // Assert
    expect(result).toBe(80);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should rate up a book by one', () => {
    // Arrange
    book.rating = 3;

    // Act
    const ratedBook = service.rateUp(book)

    // Assert
    expect(ratedBook.rating).toBe(4)
  });

  it('should rate down a book by one', () => {
    book.rating = 3;
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(2);
  });

  it('should not rate higher than 5', () => {
    book.rating = 5;
    const ratedBook = service.rateUp(book);
    expect(ratedBook.rating).toBe(5);
  });

  it('should not rate lower than 1', () => {
    book.rating = 1;
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(1);
  });
});



