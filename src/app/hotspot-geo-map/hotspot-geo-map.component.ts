import {Component, Input, OnInit} from '@angular/core';
import {GeoMap} from '../geoMap';
import {HotspotService} from '../hotspot.service';
import {HotspotList} from '../hotspotlist';
declare var $: any;


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

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.loadMapster();
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

  loadMapster(): void {
    $('img').mapster();
  }

  getUniqueId(): string {
    return `${this.map.id}-${this.map.name}-${this.hotspotFile}`;
  }

  getImageId(): string {
    return `img-${this.getUniqueId()}`;
  }

  getImageMapId(): string {
    return `imgmap-${this.getUniqueId()}`;
  }

  getImageMapIdForImage(): string {
    return `#${this.getImageMapId()}`;
  }


  getAreaMapName(): string {
    return `${this.map.name}-${this.hotspotFile}`;
  }

  getAreaMapNameRef(): string {
    return `#${this.getAreaMapName()}`;
  }

//  onMouseOver(area: HTMLAreaElement) {
//    this.currentHotspot = area.alt;
//   console.log(`Over ${area.id}`);
//   $(`#${area.id}`).mapster('highlight')
// }


  onMouseDown(area: any) {
    this.currentHotspot = area.alt;
    console.log(`Selected ${area.attributes['key'].value}`);
//    $('img').mapster('select', true, area.attributes['key'].value);
  }

}
