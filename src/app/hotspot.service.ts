import { Injectable } from '@angular/core';
import {HotspotList} from './hotspotlist';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Hotspot} from './hotspot';
import {GeoMap} from './geoMap';



@Injectable({
  providedIn: 'root'
})
export class HotspotService {
  private mapUrl = 'assets/maps/';

  constructor(private messageService: MessageService,
              private http: HttpClient) { }

  getHotspotDefinition(map: GeoMap, hotspotFile: string): Observable<string> {
    const totalPath = this.mapUrl + map.dir + hotspotFile + '.hsf';
    this.messageService.add(`MapService: fetching hotspots from ${totalPath}`);
    return this.http.get(totalPath, {responseType: 'text'});

  }

  getHotspotList(hotspotDefinition: string): HotspotList {
    const hotspotList = new HotspotList(hotspotDefinition);
    return hotspotList;
  }

}
