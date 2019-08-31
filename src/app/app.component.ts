import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myCanvas';
  btnlink = [
    { title: '饼状图', link: 'canvas' },
    { title: '自定义图形', link: 'canvas2' },
    { title: 'dragdroptable', link: 'dragdroptable' },
  ];
}
