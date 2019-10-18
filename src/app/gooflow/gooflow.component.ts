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
    haveHead: true,
    headBtns: ['new', 'open', 'save', 'undo', 'redo', 'reload'], // 如果haveHead=true，则定义HEAD区的按钮
    haveTool: true,
    haveGroup: true,
    useOperStack: true
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

  // public top_remark = {
  //   new: '新建',
  //   open: '打开文件夹',
  //   save: '保存',
  //   undo: '后退',
  //   redo: '前进',
  //   reload: '刷新',
  //   'print fa fa-print': '打印',
  //   'exportImg fa fa-external-link': '导出'
  // };

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

  // // 导出数据
  // that.gooflow.onExportImgClick = function () {
  //   that.gooflow.exportDiagram('资源编排');
  // };
  // const options = {
  //   toolBtns: ['start round mix', 'end round', 'task', 'node', 'chat', 'state', 'plug', 'join', 'fork', 'complex mix'],
  //   haveHead: true,
  //   headLabel: true,
  //   headBtns: ['new', 'open', 'save', 'undo', 'redo', 'reload'], // 如果haveHead=true，则定义HEAD区的按钮
  //   haveTool: true,
  //   haveGroup: true,
  //   useOperStack: true
  // };
  // const demo = GooFlow.init('#myDrag', options);

  // }

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
    this.demo.onItemDel = (id, type) => {
      return confirm('确定要删除该单元吗?');
    };
    this.demo.loadData(this.jsondata);
  }

  // tslint:disable-next-line:member-ordering
  public out;
  Export() {
    const data = JSON.stringify(this.demo.exportData());
    console.log('data', data);
  }

}
