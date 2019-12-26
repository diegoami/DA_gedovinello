import { Component, OnInit } from '@angular/core';
import { Map } from '../map';
import { MapService } from '../map.service';


@Component({
  selector: 'app-mapbrowser',
  templateUrl: './mapbrowser.component.html',
  styleUrls: ['./mapbrowser.component.css']
})
export class MapbrowserComponent implements OnInit {
  maps: Map[];

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.getMaps();
  }

  getMaps(): void {
    this.mapService.getMaps()
      .subscribe(maps => this.maps = maps);
  }
}
