import { Component, OnInit } from '@angular/core';
import { GeoMap } from '../geoMap';
import { GeoMapService } from '../geo-map.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  maps: GeoMap[];

  constructor(private mapService: GeoMapService) { }

  ngOnInit() {
    this.getMaps();
  }

  getMaps(): void {
    this.mapService.getMaps()
      .subscribe(maps =>  {
         this.maps = maps.concat().sort(() => Math.random() - 0.5).slice(1, 5);
      });
  }

}
