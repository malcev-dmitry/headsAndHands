import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsSocialNetworksComponent } from './icons-social-networks.component';

describe('IconsSocialNetworksComponent', () => {
  let component: IconsSocialNetworksComponent;
  let fixture: ComponentFixture<IconsSocialNetworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsSocialNetworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsSocialNetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
