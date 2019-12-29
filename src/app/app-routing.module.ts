import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapbrowserComponent } from './mapbrowser/mapbrowser.component';
import { RouterModule, Routes } from '@angular/router';
import { MapDetailComponent } from './map-detail/map-detail.component';

const routes: Routes = [
  { path: 'mapbrowser', component: MapbrowserComponent },
  { path: 'mapdetail/:id/:hotspotfile', component: MapDetailComponent },
  { path: '', redirectTo: '/mapbrowser', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
