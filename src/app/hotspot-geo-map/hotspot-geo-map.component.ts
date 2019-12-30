import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
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
  private paths: Map<string, Path2D> = new Map<string, Path2D>();
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

      const name = hotspot.hotspotName;
      if (hotspot.getShape() === 'circle') {
        const [centerX, centerY, radius] = hotspot.getCoords(1)[0];
        this.ctx.beginPath();
        const path2D = new Path2D();
        path2D.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        path2D.closePath();
        this.paths[name] = path2D;
      } else {
        const all_coords = hotspot.getCoords(1);
        this.ctx.beginPath();
        const path2D = new Path2D();
        all_coords.forEach( (coord, index) => {
          const [x, y] = coord;
          if (index === 0) {
            path2D.moveTo(x, y);
          } else {
            path2D.lineTo(x, y);
          }
        });
        path2D.closePath();
        this.paths[name] = path2D;
      }
    }
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event) {
    const clientX = event.clientX;
    const clientY = event.clientY;
    console.log(`${clientX}, ${clientY}`);
  }

}
