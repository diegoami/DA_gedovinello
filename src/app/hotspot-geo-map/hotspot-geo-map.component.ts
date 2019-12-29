import {Component, Input, OnInit} from '@angular/core';
import {GeoMap} from '../geoMap';
import {HotspotService} from '../hotspot.service';
import {HotspotList} from '../hotspotlist';

@Component({
  selector: 'app-hotspot-geo-map',
  templateUrl: './hotspot-geo-map.component.html',
  styleUrls: ['./hotspot-geo-map.component.css']
})
export class HotspotGeoMapComponent implements OnInit {
  private hotspotDefinition: string;
  private hotspotValues: string;

  hotspotList: HotspotList;
  scaling = 1;

  @Input('map') map: GeoMap;
  @Input('hotspotFile') hotspotFile: string;
  @Input('currentHotspot') currentHotspot: string;

  constructor(
    private hotspotService: HotspotService
  ) { }

  ngOnInit() {
    this.loadHotspots();
  }

  loadHotspots(): void {
    const currentGeoMap = this;
    currentGeoMap.hotspotService.getHotspotDefinition(this.map, this.hotspotFile).subscribe(
      function (hotspotDefinition) {
        currentGeoMap.hotspotDefinition = hotspotDefinition;
        currentGeoMap.hotspotList = currentGeoMap.hotspotService.getHotspotList(currentGeoMap.hotspotDefinition);
        currentGeoMap.hotspotValues = currentGeoMap.hotspotList.getAllHotspots().join();
      }
    );
  }

  getUniqueId(): string {
    return this.map.id + '-' + this.map.name + '-' + this.hotspotFile;
  }

  getAreaMapName(): string {
    return this.map.name + '-' + this.hotspotFile;
  }

  onMouseOver(alt: string) {
    this.currentHotspot = alt;
  }
}
