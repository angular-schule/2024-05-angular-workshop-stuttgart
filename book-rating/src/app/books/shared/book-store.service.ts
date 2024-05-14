import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private apiUrl = 'https://api.angular.schule';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Book[]>(this.apiUrl + '/books');
  }

  getSingle(isbn: string) {
    return this.http.get<Book>(this.apiUrl + '/books/' + isbn);
  }

  create(book: Book) {
    return this.http.post<Book>(this.apiUrl + '/books', book);
  }

  search(term: string) {
    return this.http.get<Book[]>(this.apiUrl + '/books/search/' + term)
  }

}
