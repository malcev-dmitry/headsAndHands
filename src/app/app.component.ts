import { Component, OnInit } from '@angular/core';
import { stations } from '../assets/data/stations.js';
import { iconsLocation } from '../assets/data/iconsLocation.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  markers: any;

  constructor() {}

  icon = iconsLocation;

  moscovLat = 55.7094361;
  moscovLng = 37.6546389;
  piterLat = 59.910123;
  piterLng = 30.2854809;

  zoom = 12;
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

  ngOnInit() {
    this.markers = stations;
  }
}
