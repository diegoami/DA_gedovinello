import { Map } from '../map';
import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.css']
})
export class MapDetailComponent implements OnInit {
  private hotspots: string;

  constructor(
    private route: ActivatedRoute,
    private mapService: MapService,
    private location: Location
  ) {}

  @Input() map: Map;

  ngOnInit() {
    this.getMap();
    this.getHotspots();
  }

  getMap(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mapService.getMap(id)
      .subscribe(map => this.map = map);
  }

  getHotspots(): void {
    this.mapService.getHotspots(this.map.dir)
      .subscribe(hotspots => this.hotspots = hotspots);
  }


  goBack(): void {
    this.location.back();
  }

}
