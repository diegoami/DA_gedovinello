import { Component, OnInit } from '@angular/core';
import { GeoMap } from '../geoMap';
import { GeoMapService } from '../geo-map.service';


@Component({
  selector: 'app-mapbrowser',
  templateUrl: './mapbrowser.component.html',
  styleUrls: ['./mapbrowser.component.css']
})
export class MapbrowserComponent implements OnInit {
  maps: GeoMap[];

  constructor(private mapService: GeoMapService) { }

  ngOnInit() {
    this.getMaps();
  }

  getMaps(): void {
    this.mapService.getMaps()
      .subscribe(maps => this.maps = maps);
  }
}
