import { Component, OnInit, OnChanges, SimpleChanges, AfterViewInit, Input } from '@angular/core';
import * as CountUp from 'countup';


@Component({
  selector: 'app-count-to',
  templateUrl: './count-to.component.html',
  styleUrls: ['./count-to.component.scss']
})
export class CountToComponent implements OnInit, OnChanges {


  counter: any = null; // 用于实例化CountUp
  @Input() endValue = 0;
  constructor() { }

  ngOnInit() {
    this.getcountUp();
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.endValue !== 0 ? this.counter.update(1000) : this.counter.reset();
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
  }

}
