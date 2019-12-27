import { Map } from '../map';
import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MapService } from '../map.service';
import { HotspotService } from '../hotspot.service';
import {HotspotList} from '../hotspotlist';

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.css']
})
export class MapDetailComponent implements OnInit {
  private hotspotDefinition: string;
  private hotspotList: HotspotList;
  private map: Map;

  constructor(
    private route: ActivatedRoute,
    private mapService: MapService,
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
        that.hotspotService.getHotspotDefinition(that.map.dir).subscribe(
          function(hotspotDefinition) {
            that.hotspotDefinition = hotspotDefinition;
            that.hotspotList = that.hotspotService.getHotspotList(that.hotspotDefinition);
          }
        );
      });
  }

  goBack(): void {
    this.location.back();
  }

}
