import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';
import { JsonPipe } from '@angular/common';
import { map, mergeAll, mergeMap, switchMap } from 'rxjs';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [RouterLink, JsonPipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {

  book?: Book;

  // private route = inject(ActivatedRoute);

  constructor(private route: ActivatedRoute, private bs: BookStoreService) {
    // PULL: abfragen, wenn wir Parameter benötigen
    // const isbn = this.route.snapshot.paramMap.get('isbn');
    // console.log(isbn);

    // PUSH: wir werden informiert, wenn sich Parameter ändern
    this.route.paramMap.pipe(
      map(params => params.get('isbn')!),
      switchMap(isbn => this.bs.getSingle(isbn)),
      // mergeMap = map + mergeAll
      // switchMap = map + switchAll
      // map(isbn => this.bs.getSingle(isbn)),
      // mergeAll()
    ).subscribe(book => {
      this.book = book;
    });

  }
}
