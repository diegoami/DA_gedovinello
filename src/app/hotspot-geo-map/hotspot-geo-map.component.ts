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
  private hotspotListMap: Map<string, HotspotList> = new Map();
  private hotspotValues: Array<string> = new Array<string>();

  @Input('map') map: GeoMap;

  constructor(
    private hotspotService: HotspotService
  ) { }

  ngOnInit() {
    this.loadHotspots();
  }

  loadHotspots(): void {
    const hotspotFiles = this.map.hotspotFiles;
    const currentGeoMap = this;
    hotspotFiles.forEach((hotspotFile) => {
      currentGeoMap.hotspotService.getHotspotDefinition(this.map, hotspotFile).subscribe(
        function (hotspotDefinition) {
          currentGeoMap.hotspotDefinition = hotspotDefinition;
          currentGeoMap.hotspotListMap[hotspotFile] = currentGeoMap.hotspotService.getHotspotList(currentGeoMap.hotspotDefinition);
          currentGeoMap.hotspotValues.push(currentGeoMap.hotspotListMap[hotspotFile].getAllHotspots().join());
        }
      );
    });
  }
}
