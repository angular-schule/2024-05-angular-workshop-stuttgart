import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, concatMap, filter, switchMap } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';
import { AsyncPipe } from '@angular/common';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-search',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.scss'
})
export class BookSearchComponent {
  searchControl = new FormControl('', { nonNullable: true });

  results$ = this.searchControl.valueChanges.pipe(
    filter(e => e.length >= 3),
    switchMap(term => this.bs.search(term))
  );

  constructor(private bs: BookStoreService) {
    // Suchbegriff muss midnestens 3 Zeichen lang sein
    // für jeden Suchbegriff HTTP-Request machen => Bücher verarbeiten
    // Bücher anzeigen, ganz simpel
    // wenn kein Ergebnisse, dann Meldung anzeigen
  }
}
