import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable, Observer, Subscriber, filter, from, interval, map, of, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Book Rating!';

  constructor() {

    // of('Stuttgart', 'Leipzig', 'Hamburg')
    // from([12, 42, 123])
    // interval(1000)       // ---0---1---2---3---4---5 ...
    // timer(1000, 1000)    // ---0---1---2---3---4---5 ...
    // timer(3000)          // ---------0|
    // timer(3000, 1000)    // ---------0---1---2---3---4---5 ...
    // timer(0, 1000)       // 0---1---2---3---4---5 ...

    /*timer(0, 1000).pipe(
      map(e => e * 3),
      filter(e => e % 2 === 0)
    ).subscribe({
      next: e => console.log(e),
      complete: () => console.log('COMPLETE')
    });*/



    /////////////////////////////////////////


    function producer(sub: Subscriber<number>) {
      const result = Math.random();
      sub.next(result);
      sub.next(10);
      sub.next(20);

      setTimeout(() => sub.next(100), 2000)
      setTimeout(() => sub.complete(), 4000)
    }


    const obs: Observer<number> = {
      next: (value: number) => console.log(value),
      error: (error: any) => console.error(error),
      complete: () => console.log('FERTIG'),
    };


    // producer(obs);

    const myObs$ = new Observable(producer);
    // myObs$.subscribe(obs);


  }
}
