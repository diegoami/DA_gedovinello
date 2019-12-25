import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapbrowserComponent } from './mapbrowser.component';

describe('MapbrowserComponent', () => {
  let component: MapbrowserComponent;
  let fixture: ComponentFixture<MapbrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapbrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapbrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
