import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myCanvas';
  btnlink = [
    { title: 'js 饼状图', link: 'canvas' },
    { title: 'js 自定义图形', link: 'canvas2' },
    { title: 'dragdroptable', link: 'dragdroptable' },
    { title: 'conuntUp', link: 'conuntUp' },
    { title: 'ag-grid', link: 'ag-grid' },
    { title: 'fork-join', link: 'fork-join' },
    { title: 'app-gooflow', link: 'app-gooflow' },
    { title: 'ngx-qrcode2', link: 'ngx-qrcode2' },
  ];
}
