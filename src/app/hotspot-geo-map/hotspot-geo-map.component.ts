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
  private currentPath: Path2D;
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
        this.paths.set(name, new Path2D());
        this.paths.get(name).arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
//        this.ctx.fill(path2D)
        this.ctx.closePath();

      } else {
        const all_coords = hotspot.getCoords(1);
        this.ctx.beginPath();
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
        this.paths.set(name, new Path2D());
        all_coords.forEach( (coord, index) => {
          const [x, y] = coord;
          if (index === 0) {
            this.paths.get(name).moveTo(x, y);
          } else {
            this.paths.get(name).lineTo(x, y);
          }
        });
        this.paths.get(name).lineTo(all_coords[0][0], all_coords[0][1]);
        this.ctx.closePath();
      }
    }
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event) {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top
    console.log(`${x}, ${y}`);
    this.currentHotspot = '';
    this.paths.forEach((path: Path2D, key: string) => {
      console.log(`Trying ${key}`);
      if (this.ctx.isPointInPath(path, x, y, 'evenodd')) {
        console.log(key);
        this.ctx.drawImage(this.image, 0, 0, this.map.width, this.map.height);
        this.currentHotspot = key;
        this.ctx.fill(path);
      }
    });
  }

}
