import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-qrcode2',
  templateUrl: './ngx-qrcode2.component.html',
  styleUrls: ['./ngx-qrcode2.component.scss']
})
export class NgxQrcode2Component implements OnInit {

  value;
  constructor() { }

  ngOnInit() {
  }
  setvalue(data) {
    this.value = data;
    setTimeout(() => {
      this.value = '';
    }, 3000);
  }

}
