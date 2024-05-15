import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { BookCreateComponent } from "./book-create/book-create.component";
import { BookSearchComponent } from "./book-search/book-search.component";


export const booksRoutes: Routes = [
  { path: 'books', component: DashboardComponent },
  { path: 'books/create', component: BookCreateComponent },
  { path: 'books/search', component: BookSearchComponent },
  { path: 'books/:isbn', component: BookDetailsComponent },
];
