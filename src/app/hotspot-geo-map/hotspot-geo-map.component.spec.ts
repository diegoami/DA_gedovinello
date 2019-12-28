import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotspotGeoMapComponent } from './hotspot-geo-map.component';

describe('HotspotGeoMapComponent', () => {
  let component: HotspotGeoMapComponent;
  let fixture: ComponentFixture<HotspotGeoMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotspotGeoMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotspotGeoMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
