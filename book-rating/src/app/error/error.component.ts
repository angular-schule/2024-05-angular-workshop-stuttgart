import { Component, OnDestroy } from '@angular/core';
import { Subject, Subscription, timer } from 'rxjs';

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


    /*const subject = new Subject<number>();
    subject.subscribe(e => console.log('A', e))
    subject.subscribe(e => console.log('B', e))


    subject.next(5);

    subject.subscribe(e => console.log('C', e))

    subject.next(10);*/

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
