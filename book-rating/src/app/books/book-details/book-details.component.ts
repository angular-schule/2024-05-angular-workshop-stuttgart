import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {

  // private route = inject(ActivatedRoute);

  constructor(private route: ActivatedRoute) {
    // PULL: abfragen, wenn wir Parameter benötigen
    // const isbn = this.route.snapshot.paramMap.get('isbn');
    // console.log(isbn);

    // PUSH: wir werden informiert, wenn sich Parameter ändern
    this.route.paramMap.subscribe(params => {
      const isbn = params.get('isbn')!; // Non-Null Assertion. Vorsicht, gefährlich!
      console.log(isbn);

      // AUFGABE:
      // - HTTP Buch abrufen
      // - Buch anzeigen (ganz einfach!)
    });
  }
}
