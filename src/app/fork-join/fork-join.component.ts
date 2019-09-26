import { Component, OnInit } from '@angular/core';
import { forkJoin, of, timer, interval, fromEvent, throwError } from 'rxjs';
import { take, tap, map, mergeMap, retry, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.test();
    this.test();
  }

  test() {
    // const observable = forkJoin([
    //   this.test2(),
    //   this.test1(),
    //   timer(1000),
    // ]);
    // observable.subscribe({
    //   next: value => console.log(value),
    //   complete: () => console.log('This is how it ends!'),
    // });

    // 发射一个升序 数字
    // 参数一 多少秒后开始
    // 参数二 每隔1000 毫秒发送一次
    // const numbersl = timer(3000);
    // numbersl.subscribe(x => console.log(x));


    // const numbers = interval(1000);

    // const takeFourNumbers = numbers.pipe(take(10));

    // takeFourNumbers.subscribe(x => console.log('Next: ', x));

    // Logs:
    // Next: 0
    // Next: 1
    // Next: 2
    // Next: 3

    // const clicks = fromEvent(document, 'click');
    // const positions = clicks.pipe(
    //   tap(ev => console.log(ev)),
    //   map(ev => ev),
    // );
    // positions.subscribe(x => console.log(x.clientX));

    // const source = interval(1000);
    // const example = source.pipe(
    //   mergeMap(val => {
    //     if (val > 5) {
    //       return throwError('Error!');
    //       // return thrw Error();
    //     }
    //     return of(val);
    //   }),
    //   catchError((err, caught) => caught),
    //   // retry 2 times on error
    //   retry(1)
    // );

    // const subscribe = example.subscribe({
    //   next: val => console.log(val),
    //   error: val => console.log(`${val}: Retried 2 times then quit!`)
    // });

    // Output:
    // 0..1..2..3..4..5..
    // 0..1..2..3..4..5..
    // 0..1..2..3..4..5..
    // "Error!: Retried 2 times then quit!"
  }

  test1() {
    for (let i = 0; i < 1000; i++) {
      // console.log('下标 = ', i);
    }
    for (let i = 0; i < 100; i++) {
      // console.log('进程二 = ', i);
    }
    for (let i = 0; i < 10; i++) {
      // console.log('进程一 = ', i);
    }
    return [1, 2, 3, 4, 5];
  }

  test2() {
    for (let i = 0; i < 3; i++) {
      // console.log('test2 = test2');
    }
    return { list: [1, 2, 3, 4, 5] };
  }

}
