import { DatePipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss'
})
export class DateComponent implements OnDestroy {
  d = new Date();

  private interval = setInterval(() => {
    this.d = new Date();
    console.log('DATE', this.d);
  }, 1000);

  ngOnDestroy() {
    console.log('DESTROY DATEC')
    clearInterval(this.interval);
  }
}
