import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {

  @ViewChild('agGrid') agGrid: AgGridAngular;


  columnDefs = [
    { headerName: 'Make', field: 'make', sortable: true, resizable: true, checkboxSelection: true },
    { headerName: 'Model', field: 'model', sortable: true, resizable: true, suppressSizeToFit: true },
    { headerName: 'Price', field: 'price', sortable: true, resizable: true, suppressSizeToFit: true }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];

  gridApi;
  gridColumnApi;

  defaultColDef;
  colResizeDefault;
  constructor() {
    this.defaultColDef = { resizable: true };
    this.colResizeDefault = 'shift';
   }

  ngOnInit() {
  }

  // 网格初始化
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    // this.queryParamsChange();
    // this.columnVisibleChange();
    // this.gridSizeChanged(0);
    this.autoSizeAll(this.gridColumnApi, this.gridApi);
  }

  columnVisibleChange(params?) {
    if (params) {
      this.autoSizeAll(params.columnApi, params.api);
    }
  }

  /**
   * 列自动适应
   */
  autoSizeAll(columnApi?, api?) {
    const allColumnIds = [];
      // const width = window.innerWidth;
      // let num = 0;
      // if (width < 1366) {
      //     num = 8;
      // }
      // if (width >= 1366 || width >= 1466) {
      //     num = 10;
      // }
      // if (width < 1466) {
      //     num = 8;
      // }
      // if (width >= 1920) {
      //     num = 12;
      // }
    // tslint:disable-next-line:only-arrow-functions
    columnApi.getAllColumns().forEach(function(column) {
      if (column.visible) {
        allColumnIds.push(column.colId);
      }
    });
    // if (allColumnIds.length <= 8) {
    //   api.sizeColumnsToFit();
    // } else {
    //   columnApi.autoSizeColumns(allColumnIds);
    // }
    api.sizeColumnsToFit();
    columnApi.autoSizeColumns();
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
    console.log(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}
