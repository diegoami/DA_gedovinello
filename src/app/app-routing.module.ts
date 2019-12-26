import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapbrowserComponent } from './mapbrowser/mapbrowser.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'mapbrowser', component: MapbrowserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
