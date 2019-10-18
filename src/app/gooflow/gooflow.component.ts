import { Component, OnInit, AfterViewInit } from '@angular/core';
import { goolflowdata } from './data';
declare var $: any;
// declare var GooFlow: any;

@Component({
  selector: 'app-gooflow',
  templateUrl: './gooflow.component.html',
  styleUrls: ['./gooflow.component.scss']
})
export class GooflowComponent implements OnInit, AfterViewInit {


  /**property 属性说明
   * toolBtns 左侧工具栏类型<选择指针、节点连线、组织划分框编辑开关为不可定制>
   * haveTool 左侧工具栏是否显示，boolean类型
   * headBtns 顶部工具栏类型
   * haveHead 顶部工具栏是否显示，boolean类型
   * haveGroup 组织划分框编辑开关，boolean类型
   * useOperStack 撤销，恢复按钮的有效性，boolean类型
   * headLabel 标题栏，boolean类型
   */

  public property = {
    width: 1200,
    height: 600,
    toolBtns: ['start round', 'end round', 'task round', 'node', 'chat', 'state', 'plug', 'join', 'fork', 'complex mix'],
    haveHead: false,
    headBtns: ['new', 'open', 'save', 'undo', 'redo', 'reload'], // 如果haveHead=true，则定义HEAD区的按钮
    haveTool: true,
    haveGroup: true,
    useOperStack: true,
    editable: true
  };

  // /*remark工具栏提示*/
  // public remark = {
  //   moon: '月亮',
  //   sun: '太阳',
  //   cursor: '选择指针',
  //   direct: '结点连线',
  //   start: '入口结点',
  //   end: '结束结点',
  //   task: '任务结点',
  //   node: '自动结点',
  //   chat: '决策结点',
  //   state: '状态结点',
  //   plug: '附加插件',
  //   fork: '分支结点',
  //   join: '联合结点'
  // };


  // tslint:disable-next-line:variable-name
  public top_remark: any = {
    new: '新建',
    open: '打开文件夹',
    save: '保存',
    undo: '后退',
    redo: '前进',
    reload: '刷新',
    // tslint:disable-next-line:quotemark
    'print fa fa-print': '打印',
    // tslint:disable-next-line:quotemark
    'exportImg fa fa-external-link': '导出'
  };

  public remark: any = {
    cursor: '选择指针',
    direct: '结点连线',
    start: '入口结点',
    end: '结束结点',
    task: '任务结点',
    node: '自动结点',
    chat: '决策结点',
    state: '状态结点',
    plug: '附加插件',
    fork: '分支结点',
    join: '联合结点',
    // tslint:disable-next-line:quotemark
    "complex mix": '复合结点',
    group: '组织划分框编辑开关'
  };
  public jsondata = goolflowdata;

  constructor() { }

  ngOnInit() { }
  //  创建图类$.createGooFlow
  //  prams1{element}元素节点
  //  prams2{property}配置对象

  // 工具栏提示信息setNodeRemarks
  //  prams{remark}提示信息对象
  // const that = this;
  // that.gooflow = $.createGooFlow($('#myDrag'), that.property);
  // GooFlow.prototype.editNodes = scope.editNodes; // 继承父级作用域的编辑editNodes
  // that.gooflow.setNodeRemarks(that.remark);
  // that.gooflow.setHeadToolsRemarks(that.top_remark);
  // that.gooflow.onBtnSaveClick = function () {
  //   console.log(JSON.stringify(that.gooflow.exportData()));
  // };

  // // 默认加载demo_data
  // that.gooflow.loadData(that.demo_data);

  // // 新建流程
  // that.gooflow.onBtnNewClick = function () {
  //   that.gooflow.clearData();
  // };

  // // 刷新
  // that.gooflow.gooflowFreshClick = function () {
  //   location.reload();
  // };

  // // 绑定点击事件
  // that.gooflow.onItemFocus = function (id, model) {
  //   that.cur_node_type = $('#' + id).find('i').attr('class').split(' ')[0].split('ico_')[1];
  //   that.nodeInfo = { name: $('#' + id).find('td')[1].innerText, type: that.remark[that.cur_node_type] };
  // }; // 图片点击事件
  // that.gooflow.$workArea.delegate('.GooFlow_item', 'click', { inthis: that.gooflow }, function (e) {
  //   that.curNodeId = $(this).attr('id');
  //   that.cur_node_type = $(this).find('i').attr('class').split(' ')[0].split('ico_')[1];
  //   that.nodeInfo = { name: $(this).find('td')[1].innerText, type: that.remark[that.cur_node_type] };
  //   e.data.inthis.focusItem(this.id, true);
  // });

  // // that.gooflow.onItemBlur = function(id, model) {
  // //   that.cur_node_type = '';
  // //   that.nodeInfo = { type: '', name: '' };
  // // };

  // // 打印事件
  // that.gooflow.onPrintClick = function () {
  //   that.gooflow.print(1);
  // };

  // 修改节点名称
  // changeText(); {
  //   $('#' + this.curNodeId).find('td')[1].innerText = this.nodeInfo.name;
  //   this.gooflow.$nodeData[this.curNodeId].name = this.nodeInfo.name;
  // }

  // tslint:disable-next-line:member-ordering
  public demo;

  ngAfterViewInit(): void {
    this.demo = $.createGooFlow($('#demo'), this.property);
    this.demo.setNodeRemarks(this.remark);
    // this.demo.setHeadToolsRemarks(this.top_remark);

    // 按钮点击的 时候
    this.demo.onBtnSaveClick = () => {
      alert('我点击的保存');
      console.log(JSON.stringify(this.demo.exportData()));
    };

    // 打开 按钮 点击 时候
    this.demo.onBtnOpenClick = () => {
      alert('我点击的打开 按钮');
      console.log('我点击的打开 按钮');
    };

    // 删除 节点的时候
    // this.demo.onItemDel = (id, type) => {
    //   return confirm('确定要删除该单元吗?');
    // };

    // 默认加载 jsondata
    this.demo.loadData(this.jsondata);

    // 新建流程
    this.demo.onBtnNewClick = () => {
      alert('我点击的新建流程');
      this.demo.clearData();
    };

    // 刷新
    this.demo.onFreshClick = () => {
      alert('我点击的刷新');
      location.reload();
    };

    // 被由不选中变成选中时，触发的方法。
    // this.demo.onItemFocus = (id, model) => {
    // alert('我点击的点击事件');
    // console.log('data', id, model);
    // };

    // 被由选中变成不选中时，触发的方法。
    this.demo.onItemBlur = (id, model) => {
      // alert('被由选中变成不选中时');
      // console.log('data', id, model);
    };

    // 图片点击事件 也就是节点
    this.demo.$workArea.delegate('.GooFlow_item', 'click', { inthis: this.demo }, (e) => {
      console.log('图片点击事件', e);
    });

    // 节点的双击事件
    this.demo.$workArea.delegate('.ico + td', 'dblclick', { inthis: this.demo }, (e) => {
      console.log('节点的双击事件', e);
    });


    // 被双击时，触发的方法。
    this.demo.onItemDbClick = (id, type) => {
      console.log('被双击时，触发的方法。');
      console.log('被双击时，触发的方法。', id);
      console.log('被双击时，触发的方法。', type);
    };
    // 某个元素（节点/连线）时触发的方法。
    this.demo.onItemMark = (id, type) => {
      alert('某个元素（节点/连线）时触发的方法');
      console.log('被双击时，触发的方法。', id, type);
    };

    // 被重命名时，触发的方法。
    this.demo.onItemRename = (id, name, type) => {
      console.log('被重命名时', id, name, type);
    };

    // 被更改时，触发的方法。
    this.demo.onMemoSetText = (id, type) => {
      console.log('被更改时', id, type);
    };

  }

  // tslint:disable-next-line:member-ordering
  public out;
  // tslint:disable-next-line:member-ordering
  public demoJson: any = '';
  Export() {
    const data = JSON.stringify(this.demo.exportData());
    console.log('data', data);
    this.demoJson = data;
  }

}
