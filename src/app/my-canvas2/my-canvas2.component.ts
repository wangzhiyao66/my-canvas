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

    // 绘制不规则图形 #93a3e4 #8ee4d9
    // 第一种算法
    this.ctx.beginPath();
    this.ctx.moveTo(155, 160);
    this.ctx.strokeStyle = 'red';
    this.ctx.quadraticCurveTo(110, 200, 155, 240);
    this.ctx.quadraticCurveTo(200, 345, 235, 240);
    this.ctx.quadraticCurveTo(310, 200, 235, 160);
    this.ctx.quadraticCurveTo(200, 65, 155, 160);
    this.ctx.fillStyle = 'rgba(32,68,113, 0.5)';
    this.ctx.fill();
    this.ctx.strokeStyle = 'red';
    this.ctx.lineWidth = 3;
    this.ctx.stroke();
    // 绘制参考点

    // 第二种算法
    // this.ctx.beginPath();
    // this.ctx.moveTo(200, 125);
    // this.ctx.strokeStyle = 'red';
    // this.ctx.quadraticCurveTo(160, 160, 120, 200);
    // this.ctx.quadraticCurveTo(120, 275, 200, 275);
    // this.ctx.quadraticCurveTo(280, 275, 280, 200);
    // this.ctx.quadraticCurveTo(275, 125, 200, 125);
    // this.ctx.fillStyle = 'rgba(32,68,113, 0.5)';
    // this.ctx.fill();
    // this.ctx.strokeStyle = '#8ee4d9';
    // this.ctx.lineWidth = 3;
    // this.ctx.stroke();

    // this.move(200, 125);
    // this.move(120, 200);
    // this.move(200, 275);
    // this.move(280, 200);


  }
  // 绘制参考点
  move(x: number, y: number) {
    // 绘制上面曲线的控制点和控制线，控制点坐标为两直线的交点(75,50)
    this.ctx.beginPath();
    this.ctx.arc(x, y, 4, 0, 2 * Math.PI);
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 2;
    this.ctx.fillStyle = 'pink';
    this.ctx.fill();
    this.ctx.stroke();
  }

}
