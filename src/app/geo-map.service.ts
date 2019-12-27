import { Injectable } from '@angular/core';
import { GeoMap } from './geoMap';
import { MAPS } from './list-maps';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeoMapService {


  constructor(private messageService: MessageService,
              private http: HttpClient) { }

  getMaps(): Observable<GeoMap[]> {
    this.messageService.add('MapService: fetched maps');
    return of(MAPS);
  }

  getMap(id: number): Observable<GeoMap> {
    this.messageService.add(`MapService: fetched map id=${id}`);
    return of(MAPS.find(hero => hero.id === id));
  }

  private log(message: string) {
    this.messageService.add(`MapService: ${message}`);
  }


}
