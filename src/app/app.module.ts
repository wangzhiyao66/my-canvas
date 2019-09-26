import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCanvasComponent } from './my-canvas/my-canvas.component';
import { MyCanvas2Component } from './my-canvas2/my-canvas2.component';
import { FormsModule } from '@angular/forms';
import { CountToComponent } from './count-to/count-to.component';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { DragdropTableComponent } from './dragdrop-table/dragdrop-table.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { DragDropDirective } from './pipe/drag-drop.directive';
@NgModule({
  declarations: [
    AppComponent,
    MyCanvasComponent,
    MyCanvas2Component,
    CountToComponent,
    DragdropTableComponent,
    AgGridComponent,
    ForkJoinComponent,
    DragDropDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
