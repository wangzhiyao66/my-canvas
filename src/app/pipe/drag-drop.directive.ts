import { Directive, ElementRef, Renderer, HostListener, OnInit, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[DragDrop]'
})
export class DragDropDirective implements OnInit {

  // 设置为private，放置外部改变内部数据
  private isDown = false; // 控制是否按下
  private disX;
  private disY;

  // tslint:disable-next-line:no-input-rename
  @Input('DragDrop') dragColor: string;

  @HostListener('mousedown', ['$event']) onMousedown(event) {
    // console.log(event);
    this.isDown = true;
    this.disX = event.clientX - this.el.nativeElement.offsetLeft;
    this.disY = event.clientY - this.el.nativeElement.offsetTop;
  }

  @HostListener('document:mousemove', ['$event']) onMousemove(event) {
    // 判断该元素是否被点击了。
    if (this.isDown) {
      console.log('移动中');
      const newdisX = event.clientX;
      const newdisY = event.clientY;
      this.el.nativeElement.style.left = newdisX - this.disX + 'px';
      this.el.nativeElement.style.top = newdisY - this.disY + 'px';
    }
  }

  // 监听document离开事件
  @HostListener('document:mouseup', ['$event']) onMouseup() {
    // 只用当元素移动过了，离开函数体才会触发。
    if (this.isDown) {
      console.log('fail');
      this.isDown = false;
    }
  }

  // tslint:disable-next-line: deprecation
  constructor(private el: ElementRef, private rr: Renderer) { }

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    // this.setColor(this.dragColor);
  }

  private setColor(color) {
    this.el.nativeElement.style.background = color;
  }
}
