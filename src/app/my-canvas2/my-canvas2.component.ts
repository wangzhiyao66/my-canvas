import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-my-canvas2',
  templateUrl: './my-canvas2.component.html',
  styleUrls: ['./my-canvas2.component.scss']
})
export class MyCanvas2Component implements OnInit {

  @ViewChild('canvas2') canvas2: ElementRef;

  ctx: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit() {
    this.ctx = (this.canvas2.nativeElement as HTMLCanvasElement).getContext('2d'); // 获取dom
    // 进行绘制
    this.startChart();
  }

  // 开始 绘制图形
  startChart() {
    // 开始绘制底图案 底层圆环
    // this.ctx.moveTo(0, 0);
    this.ctx.beginPath();
    this.ctx.arc(200, 200, 25, 0, 2 * Math.PI);
    this.ctx.strokeStyle = 'white';
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.arc(200, 200, 50, 0, 2 * Math.PI);
    this.ctx.strokeStyle = 'white';
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.arc(200, 200, 75, 0, 2 * Math.PI);
    this.ctx.strokeStyle = 'white';
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.arc(200, 200, 100, 0, 2 * Math.PI);
    this.ctx.strokeStyle = 'white';
    this.ctx.stroke();

    // 4个点
    this.ctx.beginPath();
    this.ctx.arc(100, 200, 4, 0, 2 * Math.PI);
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 2;
    this.ctx.fillStyle = '#9199d0';
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.arc(300, 200, 4, 0, 2 * Math.PI);
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 2;
    this.ctx.fillStyle = '#9199d0';
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.arc(200, 100, 4, 0, 2 * Math.PI);
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 2;
    this.ctx.fillStyle = '#9199d0';
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.arc(200, 300, 4, 0, 2 * Math.PI);
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 2;
    this.ctx.fillStyle = '#9199d0';
    this.ctx.fill();
    this.ctx.stroke();
    // 画 2 条 线
    this.ctx.beginPath();
    this.ctx.lineTo(200, 100);
    this.ctx.lineTo(200, 300);
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = 'white';
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.lineTo(100, 200);
    this.ctx.lineTo(300, 200);
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = 'white';
    this.ctx.stroke();
  }

}
