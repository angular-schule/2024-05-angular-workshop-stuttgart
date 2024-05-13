import { Component, Input } from '@angular/core';
import { Book } from '../shared/book';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  // hier dürfen Daten von der Elternkomponente hineinfließen
  // von oben nach unten
  @Input() book?: Book;
}
