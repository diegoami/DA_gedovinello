import { Injectable } from '@angular/core';
import { Map } from './map';
import { MAPS } from './list-maps';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private mapUrl = 'http://amicabile.com/javascript/geoclick/maps/';

  constructor(private messageService: MessageService,
              private http: HttpClient) { }

  getMaps(): Observable<Map[]> {
    this.messageService.add('MapService: fetched maps');
    return of(MAPS);
  }

  getMap(id: number): Observable<Map> {
    this.messageService.add(`MapService: fetched map id=${id}`);
    return of(MAPS.find(hero => hero.id === id));
  }

  getHotspots(path: string): Observable<string> {
    const totalPath = this.mapUrl + path + 'towns.hsf';
    this.messageService.add(`MapService: fetching hotspots from ${totalPath}`);
    return this.http.get<string>(totalPath);

  }

  private log(message: string) {
    this.messageService.add(`MapService: ${message}`);
  }


}
