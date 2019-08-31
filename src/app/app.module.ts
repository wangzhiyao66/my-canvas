import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCanvasComponent } from './my-canvas/my-canvas.component';
import { MyCanvas2Component } from './my-canvas2/my-canvas2.component';
import { FormsModule } from '@angular/forms';
import { DragdropTableComponent } from './dragdrop-table/dragdrop-table.component';
@NgModule({
  declarations: [
    AppComponent,
    MyCanvasComponent,
    MyCanvas2Component,
    DragdropTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
