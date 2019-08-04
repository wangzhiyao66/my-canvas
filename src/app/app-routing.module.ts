import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCanvasComponent } from './my-canvas/my-canvas.component';
import { MyCanvas2Component } from './my-canvas2/my-canvas2.component';

const routes: Routes = [
  { path: '', component: MyCanvasComponent },
  { path: 'canvas', component: MyCanvasComponent },
  { path: 'canvas2', component: MyCanvas2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
