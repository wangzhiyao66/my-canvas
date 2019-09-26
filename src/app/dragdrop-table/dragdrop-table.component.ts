
import { Component, OnInit, ViewChild, ChangeDetectorRef, HostListener, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
// tslint:disable-next-line:one-variable-per-declaration
declare const $: any, lenovoPublic;

declare var tableResize: any;
@Component({
  selector: 'app-dragdrop-table',
  templateUrl: './dragdrop-table.component.html',
  styleUrls: ['./dragdrop-table.component.scss']
})
export class DragdropTableComponent implements OnInit, AfterViewInit {


  date = { // 日期参数，运作产线一栏的日期参数，需要一个开始时间和一个结束时间
    startDate: '2019-09-09',
    endDate: '2019-10-10'
  };

  //   设置给ng-template 传值，解决模版多次引用时引发的id重复问题,如模版需要参数，可使用这种方式传值-----start
  planBroadHeading = {
    text: 'planBroadHeading',
  };
  operationProdLine = {
    text: 'operationProdLine',
  };
  materialControl = {
    text: 'materialControl',
  };
  state = {
    text: 'state',
  };
  //   设置给ng-template 传值-----end



  @HostListener('document:click', ['$event.target'])
  isContains(target) {
    const multipleBoxBodyAll = Array.from(document.querySelectorAll('.multiple-box-body'));
    // const btnEditAll = Array.from(document.querySelectorAll('.btn-edit'));
    const btnContentAll = Array.from(document.querySelectorAll('.btn-content'));

    if (multipleBoxBodyAll.every((x) => !(x.querySelector('.search')).contains(target) && !(x.querySelector('.search-box-content')).contains(target)) && btnContentAll.every(m => !m.contains(target))) {
      this.hideCheckBox(null);
      // btnEditAll.map(m => m['style'].display = 'none');
    }
  }

  constructor(
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,

  ) { }
  ngOnInit() {
  }

  ngAfterViewInit() {
    // 初始化 JQ22 的拖拽表格
    tableResize.init();
  }


  getDatePickerDate(param) {
    lenovoPublic.selfLog2(() => console.log(param));
  }

  // 显示多选框内容
  public showCheckBox(event) {
    const target = event.target.className.includes('btn-content') ? event.target : event.target.parentNode;
    const showEle = target.parentNode.querySelector('.btn-edit');
    const search = showEle.querySelector('.search').querySelector('.text');

    this.hideCheckBox(null);
    lenovoPublic.setCss(showEle, { display: 'block' });
    this.moveEnd(search);
  }

  // 隐藏多选
  public hideCheckBox(event) {
    const btnEditAll = Array.from(document.querySelectorAll('.btn-edit'));
    const curShowBtn = btnEditAll.find((item) => item['style'].display !== 'none');
    if (curShowBtn) {
      lenovoPublic.setCss(curShowBtn, { display: 'none' });
    }
  }

  // 点击浮层列表时获取内容到输入框，filter-bar
  public getContent(event) { }


  // 监听可编辑div的键盘事件----点击enter按钮时不换行
  public cancelCode13(event) {
    lenovoPublic.selfLog2(() => console.log(event.keyCode));
    if (event.keyCode === 13) {
      event.preventDefault();
      return;
    }
  }

  // 运作产线，计划大类、物控，状态的展开列表的详细内容
  // tslint:disable-next-line:member-ordering
  multipleCheckboxContent = [
    {
      content: '硬盘'
    },
    {
      content: '屏幕'
    },
    {
      content: '数据线'
    },
    {
      content: '硬盘'
    },
    {
      content: '屏幕'
    },
    {
      content: '数据线'
    }
  ];


  // 移动可编辑div的光标的位置到最后
  private moveEnd(obj) {
    obj.focus();
    const len = obj.innerText.length;
    if (document['selection']) {
      const sel = document['selection'].createRange();
      sel.moveStart('character', len);
      sel.collapse();
      sel.select();
    } else {                                                 /* IE11 特殊处理 */
      const sel = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(obj);
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }


}
