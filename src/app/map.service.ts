import { Injectable } from '@angular/core';
import { Map } from './map';
import { MAPS } from './list-maps';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  getMaps(): Map[] {
    return MAPS;
  }

}
