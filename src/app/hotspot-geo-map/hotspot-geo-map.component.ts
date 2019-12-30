import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
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
  private ctx: CanvasRenderingContext2D;
  hotspotList: HotspotList;
  scaling = 1;


  @Input('map') map: GeoMap;
  @Input('hotspotFile') hotspotFile: string;
  @Input('currentHotspot') currentHotspot: string;

  @ViewChild('canvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement>;

  constructor(
    private hotspotService: HotspotService
  ) { }

  ngOnInit() {
    this.loadHotspots();
    this.ctx = this.canvas.nativeElement.getContext('2d');

  }

  ngAfterViewInit() {
    this.loadImage();
  }

  loadHotspots(): void {
    const currentGeoMap = this;
    currentGeoMap.hotspotService.getHotspotDefinition(this.map, this.hotspotFile).subscribe(
      function (hotspotDefinition) {
        currentGeoMap.hotspotDefinition = hotspotDefinition;
        currentGeoMap.hotspotList = currentGeoMap.hotspotService.getHotspotList(currentGeoMap.hotspotDefinition);
      }
    );
  }

  loadImage(): void {
    const image = new Image();
    image.src = this.map.getFullPathImage();
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0, this.map.width, this.map.height);
    };
  }

  onMouseDown(area: any) {
    this.currentHotspot = area.alt;
    console.log(`Selected ${area.attributes['key'].value}`);
  }

}
