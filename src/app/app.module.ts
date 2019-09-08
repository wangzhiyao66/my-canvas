import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCanvasComponent } from './my-canvas/my-canvas.component';
import { MyCanvas2Component } from './my-canvas2/my-canvas2.component';
import { FormsModule } from '@angular/forms';
import { CountToComponent } from './count-to/count-to.component';
@NgModule({
  declarations: [
    AppComponent,
    MyCanvasComponent,
    MyCanvas2Component,
    CountToComponent
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
