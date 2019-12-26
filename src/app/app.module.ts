import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapbrowserComponent } from './mapbrowser/mapbrowser.component';
import { FormsModule } from '@angular/forms';
import { MapDetailComponent } from './map-detail/map-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    MapbrowserComponent,
    MapDetailComponent,
    MessagesComponent
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
