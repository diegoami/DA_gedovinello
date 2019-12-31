import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapbrowserComponent } from './mapbrowser/mapbrowser.component';
import { FormsModule } from '@angular/forms';
import { MapDetailComponent } from './map-detail/map-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HotspotGeoMapComponent } from './hotspot-geo-map/hotspot-geo-map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { GeoNavComponent } from './geo-nav/geo-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { GeoDashboardComponent } from './geo-dashboard/geo-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { GeoTableComponent } from './geo-table/geo-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MapbrowserPageComponent } from './mapbrowser-page/mapbrowser-page.component';
import { MapDetailPageComponent } from './map-detail-page/map-detail-page.component';



@NgModule({
  declarations: [
    AppComponent,
    MapbrowserComponent,
    MapDetailComponent,
    MessagesComponent,
    HotspotGeoMapComponent,
    GeoNavComponent,
    GeoDashboardComponent,
    GeoTableComponent,
    MapbrowserPageComponent,
    MapDetailPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
