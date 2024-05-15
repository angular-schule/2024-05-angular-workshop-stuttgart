import { Routes } from '@angular/router';
import { booksRoutes } from './books/books.routes';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  // bei Weiterleitung vom leeren Pfad fast immer pathMatch:full nötig
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  ...booksRoutes,

  // Wildcard-Route: immer ganz nach unten!
  { path: '**', component: ErrorComponent },

  // { path: 'error', component: ErrorComponent },
  // { path: '**', redirectTo: '/error' },


  // AUFGABE: Komponente für die Fehlerseite
];
