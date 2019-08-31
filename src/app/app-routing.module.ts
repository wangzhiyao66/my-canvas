import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCanvasComponent } from './my-canvas/my-canvas.component';
import { MyCanvas2Component } from './my-canvas2/my-canvas2.component';
import { DragdropTableComponent } from './dragdrop-table/dragdrop-table.component';

const routes: Routes = [
  { path: '', component: MyCanvas2Component },
  // { path: '', component: DragdropTableComponent },
  { path: 'canvas', component: MyCanvasComponent },
  { path: 'canvas2', component: MyCanvas2Component },
  { path: 'dragdroptable', component: DragdropTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
