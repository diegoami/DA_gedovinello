import { Injectable } from '@angular/core';
import { Map } from './map';
import { MAPS } from './list-maps';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private messageService: MessageService) { }

  getMaps(): Observable<Map[]> {
    this.messageService.add('MapService: fetched maps');
    return of(MAPS);
  }

}
