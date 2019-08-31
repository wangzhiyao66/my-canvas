
import { Component, OnInit, ViewChild, ChangeDetectorRef, HostListener, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $: any, lenovoPublic;

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
    this.initTableColresizable();

  }

  initTableColresizable() {
    let isDraging = false;
    const onSampleResized = function (e) {
      isDraging = false;
      const cRZAll = Array.from(document.querySelectorAll('.CRC .CRZ'));
      cRZAll.map(x => x.classList.add('gripCRZ'));
    };
    const onDragResized = function (e) {
      if (isDraging) {
        return;
      }
      isDraging = true;
      const cRZAll = Array.from(document.querySelectorAll('.CRC .CRZ'));
      cRZAll.map(x => x.classList.remove('gripCRZ'));
    };
    $('table').colResizable({
      hoverCursor: 'ew-resize', // 此属性可用于自定义当用户位于列锚点时将显示的光标。
      dragCursor: 'ew-resize', // 定义用户调整列大小时将使用的游标
      liveDrag: true, // 设置为true 时修改拖动时表格跟着动
      gripInnerHtml: '<div class="grip"></div>',
      draggingClass: 'dragging', // 此属性用作拖动时分配给列锚点的css类。它可用于视觉反馈目的。
      onResize: onSampleResized, // 如果提供了回调函数，则在用户结束拖动修改前一个表格布局的列锚点时将触发该函数。回调函数可以通过参数检索的事件的currentTarget属性获取对更新表的引用
      // partialRefresh: true, // 如果表位于updatePanel内或使用ajax进行任何其他类型的部分页面刷新，则此属性应设置为true。在部分部分刷新之前和之后，表的ID应该相同。
      onDrag: onDragResized, // 如果启用了liveDrag，则在拖动列锚时会触发此事件。如果将表用作多范围滑块，则可能很有用。回调函数可以通过参数检索的事件的currentTarget属性获取对更新表的引用
      // postbackSafe: true, // 此属性可用于指定在回发或浏览器刷新后手动选择的列宽必须保持不变
      // minWidth: 80, // 此值指定列允许的最小宽度（以像素为单位）
    });
    setTimeout(() => {
      const gripNext = Array.from(document.querySelectorAll('.CRC .grip+div'));
      gripNext.map(x => x.classList.add('gripCRZ'));
    }, 0);

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
