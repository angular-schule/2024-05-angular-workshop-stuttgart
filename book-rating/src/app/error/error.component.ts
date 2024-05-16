import { Component, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent implements OnDestroy {

  private sub: Subscription;

  constructor() {
    this.sub = timer(0, 1000).subscribe(e => console.log(e));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
