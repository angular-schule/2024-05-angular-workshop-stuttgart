import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.scss'
})
export class BookCreateComponent {

  private bs = inject(BookStoreService);
  private router = inject(Router);

  bookForm = new FormGroup({
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
      ]
    }),
    title: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(50)
      ]
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: []
    }),
    rating: new FormControl(1, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(1),
        Validators.max(5),
      ]
    }),
    price: new FormControl(0, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(0)
      ]
    }),
  });


  isInvalid(controlName: string): boolean {
    const control = this.bookForm.get(controlName);
    if (!control) {
      return false; // oder true?
    }

    return control.invalid && control.touched;
  }

  submitForm() {
    // TODO
    // - aus den Werten ein Buch erzeugen
    // - an den Server senden: BookStoreService create
    // - bei Erfolg:
    //   - Formular zurücksetzen
    //   - wegnavigieren zur Detailseite oder Dashboard
    //   - Meldung anzeigen

    // getRawValue() liefert alle Werte, auch die der deaktivierten Controls
    const newBook: Book = this.bookForm.getRawValue();
    /*const newBook: Book = {
      ...this.bookForm.getRawValue(),
      authors: [],
    };*/

    this.bs.create(newBook).subscribe(receivedBook => {
      this.router.navigate(['/books', receivedBook.isbn])
      console.log('SUCCESS');
    });

    console.log('DANACH');

  }
}
