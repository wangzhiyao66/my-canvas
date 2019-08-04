import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'my-canvas',
  templateUrl: './my-canvas.component.html',
  styleUrls: ['./my-canvas.component.scss']
})
export class MyCanvasComponent implements OnInit {

  nums: any = [];
  colors: any = [];
  start: number;
  end: number;

  ctx: CanvasRenderingContext2D;

  @ViewChild('canvas') canvas: ElementRef;

  constructor() { }

  ngOnInit() {
    this.ctx = (this.canvas.nativeElement as HTMLCanvasElement).getContext('2d'); // 获取dom
    this.nums = [40, 10, 3, 5, 15, 33];
    this.colors = ['#983335', '#77963f', '#5d437c', '#35859f', '#d1702f', '#365e96'];
    this.start = 0;
    this.end = 0;
    this.ctx.translate(200, 175);

    this.ctx.rotate(-Math.PI / 6); // 旋转一定角度更加自然
    this.pieChart();
    this.pieNum();
  }

  // 绘制圆饼
  pieChart() {
    for (let i = 0; i < this.nums.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.end += this.nums[i] / 50 * Math.PI; // 终止角度
      this.ctx.strokeStyle = 'white';
      this.ctx.fillStyle = this.colors[i];
      this.ctx.arc(0, 0, 100, this.start, this.end);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.stroke();
      this.start += this.nums[i] / 50 * Math.PI; // 起始角度
    }
  }
  // 绘制圆饼上的数值
  pieNum() {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.nums.length; i++) {
      this.start = this.nums[i] / 50 * Math.PI / 2;
      this.ctx.rotate(this.end + this.start); // 旋转数值
      this.ctx.font = '15px scans-serif';
      this.ctx.fillStyle = '#fff';
      this.ctx.fillText(this.nums[i] + '%', 70, 0);
      this.end = this.nums[i] / 50 * Math.PI / 2;
    }
  }


}
