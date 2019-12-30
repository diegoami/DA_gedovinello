import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {GeoMap} from '../geoMap';
import {HotspotService} from '../hotspot.service';
import {HotspotList} from '../hotspotlist';
import {Hotspot} from '../hotspot';

@Component({
  selector: 'app-hotspot-geo-map',
  templateUrl: './hotspot-geo-map.component.html',
  styleUrls: ['./hotspot-geo-map.component.css']
})
export class HotspotGeoMapComponent implements OnInit {
  private hotspotDefinition: string;
  private ctx: CanvasRenderingContext2D;
  private image: any;
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
    this.loadHotspotsFromFile();
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.image = new Image();
    this.image.src = this.map.getFullPathImage();

  }

  ngAfterViewInit() {
    this.loadImage();
  }

  loadHotspotsFromFile(): void {
    const currentGeoMap = this;
    currentGeoMap.hotspotService.getHotspotDefinition(this.map, this.hotspotFile).subscribe(
      function (hotspotDefinition) {
        currentGeoMap.hotspotDefinition = hotspotDefinition;
        currentGeoMap.hotspotList = currentGeoMap.hotspotService.getHotspotList(currentGeoMap.hotspotDefinition);
      }
    );
  }

  loadImage(): void {

    this.image.onload = () => {
      this.ctx.drawImage(this.image, 0, 0, this.map.width, this.map.height);
      this.loadHotspotsInCanvas();
    };
  }

  loadHotspotsInCanvas() {
    for (const obj of this.hotspotList.hotspots) {
      const hotspot: Hotspot = <Hotspot>obj;
      if (hotspot.getShape() === 'circle') {
        const [centerX, centerY, radius] = hotspot.getCoords(1)[0];
          this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = 'green';
        this.ctx.fill();
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = '#003300';
        this.ctx.stroke();
      } else {
        const all_coords = hotspot.getCoords(1);
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        this.ctx.beginPath();
        all_coords.forEach( (coord, index) => {
          const [x, y] = coord;
          if (index === 0) {
            this.ctx.moveTo(x, y);
          } else {
            this.ctx.lineTo(x, y);
          }
        });
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.fill();
      }
    }
  }

  onMouseDown(area: any) {
    this.currentHotspot = area.alt;
    console.log(`Selected ${area.attributes['key'].value}`);
  }

}
