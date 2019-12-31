import { GeoMap } from '../geoMap';
import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GeoMapService } from '../geo-map.service';
import { HotspotService } from '../hotspot.service';
import {globals} from '../../environments/environment';


@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.css']
})
export class MapDetailComponent implements OnInit {
  private map: GeoMap;
  hotspotFile: string;

  constructor(
    private route: ActivatedRoute,
    private mapService: GeoMapService,
    private hotspotService: HotspotService,
    private location: Location
  ) {}


  ngOnInit() {
    this.getMap();
  }

  getMap(): void {
    const that = this;
    const id = +this.route.snapshot.paramMap.get('id');
    this.hotspotFile = this.route.snapshot.paramMap.get('hotspotfile');
    globals.selectedHotspotFile = this.hotspotFile;
    globals.selectedMapId = id;
    this.mapService.getMap(id).subscribe((map) => {
      that.map = map;
    });
  }

  goBack(): void {
    this.location.back();
  }

}
