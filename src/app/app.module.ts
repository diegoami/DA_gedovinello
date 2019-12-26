import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapbrowserComponent } from './mapbrowser/mapbrowser.component';
import { FormsModule } from '@angular/forms';
import { MapDetailComponent } from './map-detail/map-detail.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    MapbrowserComponent,
    MapDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
