import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapbrowserComponent } from './mapbrowser/mapbrowser.component';
import { RouterModule, Routes } from '@angular/router';
import { MapDetailComponent } from './map-detail/map-detail.component';
import { MapDetailPageComponent } from './map-detail-page/map-detail-page.component';
import {MapbrowserPageComponent} from './mapbrowser-page/mapbrowser-page.component';


const routes: Routes = [
  { path: 'mapbrowser', component: MapbrowserPageComponent },
  { path: 'mapdetail/:id/:hotspotfile', component: MapDetailPageComponent },
  { path: 'currentmapdetail', component: MapDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
