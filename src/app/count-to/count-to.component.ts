import { Component, OnInit, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
// import * as ns from 'CountUp';
// import CountUp = require('CountUp');
// import CountUp from 'countup';
import * as CountUp from 'countup';
// declare var CountUp: any;

@Component({
  selector: 'app-count-to',
  templateUrl: './count-to.component.html',
  styleUrls: ['./count-to.component.scss']
})
export class CountToComponent implements OnInit, OnChanges {


  counter: any = null;
  constructor() { }

  ngOnInit() {
    this.getcountUp();
  }


  ngOnChanges(changes: SimpleChanges): void {

  }

  // 设置数据
  getcountUp() {
    this.counter = new CountUp('CountUP', 0, 100, 0, 3, {
      useEasing: false, // 是否使用变速效果
      useGrouping: true, // 是否使用变速效果
      separator: ',', // 分组符号
      decimal: '.', // 整数和小数分割符号
    });
    this.counter.start(() => console.log('Complete!'));
    // setTimeout(() => {
    //   this.counter.update(1000);
    // }, 15);
  }

}
