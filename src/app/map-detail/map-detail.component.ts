import { Map } from '../map';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.css']
})
export class MapDetailComponent implements OnInit {

  constructor() { }

  @Input() map: Map;

  ngOnInit() {
  }
}
