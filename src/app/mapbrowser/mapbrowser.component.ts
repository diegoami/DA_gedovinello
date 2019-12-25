import { Component, OnInit } from '@angular/core';
import { Map } from '../map';
import { MAPS } from '../list-maps';

@Component({
  selector: 'app-mapbrowser',
  templateUrl: './mapbrowser.component.html',
  styleUrls: ['./mapbrowser.component.css']
})
export class MapbrowserComponent implements OnInit {
  maps = MAPS;
  selectedMap: Map;

  constructor() { }

  ngOnInit() {
  }

  onSelect(map: Map): void {
    this.selectedMap = map;
  }

}
