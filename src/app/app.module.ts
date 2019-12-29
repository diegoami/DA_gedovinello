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


@NgModule({
  declarations: [
    AppComponent,
    MapbrowserComponent,
    MapDetailComponent,
    MessagesComponent,
    HotspotGeoMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
