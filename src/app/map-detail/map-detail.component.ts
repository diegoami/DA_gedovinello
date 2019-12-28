import { GeoMap } from '../geoMap';
import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GeoMapService } from '../geo-map.service';
import { HotspotService } from '../hotspot.service';
import {HotspotList} from '../hotspotlist';

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.css']
})
export class MapDetailComponent implements OnInit {
  private map: GeoMap;

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
    this.mapService.getMap(id).subscribe(function(map) {
      that.map = map;
    });
  }

  goBack(): void {
    this.location.back();
  }

}
