import { Component, OnInit } from '@angular/core';
import { Map } from '../map';
import { MapService } from '../map.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  maps: Map[];

  constructor(private mapService: MapService) { }

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
