import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})

export class RightPanelComponent implements OnInit {
  constructor() {}

  moscovLat = 55.7094361;
  moscovLng = 37.6546389;
  piterLat = 59.910123;
  piterLng = 30.2854809;

  lat = this.moscovLat;
  lng = this.moscovLng;

  action = true;
  memoryAction = 1;

  activeInfo(numberCity) {
    if (this.memoryAction !== numberCity) {
      this.action = !this.action;
      this.memoryAction = numberCity;

      if (numberCity === 1) {
        this.lat = this.moscovLat;
        this.lng = this.moscovLng;
      }
      if (numberCity === 2) {
        this.lat = this.piterLat;
        this.lng = this.piterLng;
      }
    }
  }
  ngOnInit() {}
}
