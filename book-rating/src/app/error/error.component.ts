import { Component, OnDestroy } from '@angular/core';
import { Subject, Subscription, take, takeUntil, takeWhile, timer } from 'rxjs';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent implements OnDestroy {

  private destroy$ = new Subject<void>();

  constructor() {

    // const notifier = timer(5500); // ----------------0|

    timer(0, 1000).pipe(
      // take(5)
      // takeWhile(e => e < 10)
      // takeUntil(notifier)
      takeUntil(this.destroy$)
    ).subscribe({
      next: e => console.log(e),
      complete: () => console.log('COMPLETE')
    });


    /*const subject = new Subject<number>();
    subject.subscribe(e => console.log('A', e))
    subject.subscribe(e => console.log('B', e))

    subject.next(5);

    subject.subscribe(e => console.log('C', e))

    subject.next(10);*/

  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
