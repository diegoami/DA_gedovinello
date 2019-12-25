import { Component, OnInit } from '@angular/core';
import { Map } from '../map';

@Component({
  selector: 'app-mapbrowser',
  templateUrl: './mapbrowser.component.html',
  styleUrls: ['./mapbrowser.component.css']
})
export class MapbrowserComponent implements OnInit {

  map: Map = {
    id: 1,
    name: 'Europe'
  };

  constructor() { }

  ngOnInit() {
  }

}
