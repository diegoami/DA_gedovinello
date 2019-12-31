import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapbrowserPageComponent } from './mapbrowser-page.component';

describe('MapbrowserPageComponent', () => {
  let component: MapbrowserPageComponent;
  let fixture: ComponentFixture<MapbrowserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapbrowserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapbrowserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
