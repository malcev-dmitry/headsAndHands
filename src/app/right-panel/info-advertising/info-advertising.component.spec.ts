import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAdvertisingComponent } from './info-advertising.component';

describe('InfoAdvertisingComponent', () => {
  let component: InfoAdvertisingComponent;
  let fixture: ComponentFixture<InfoAdvertisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAdvertisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAdvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
