import { Component, OnInit } from '@angular/core';
import { stations } from '../assets/data/stations.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  private icon = [
    {
      url: '../assets/icons/group.svg',
      scaledSize: {
        height: 48,
        width: 120
      }
    },
    {
      url: '../assets/icons/star.svg',
      scaledSize: {
        height: 13.3,
        width: 13.3
      }
    },
    {
      url: '../assets/icons/page.svg',
      scaledSize: {
        height: 13.3,
        width: 13.3
      }
    },
    {
      url: '../assets/icons/starHPMD.png',
      scaledSize: {
        height: 48,
        width: 120
      }
    },
    {
      url: '../assets/icons/pageHPMD.png',
      scaledSize: {
        height: 48,
        width: 120
      }
    },
  ];

  markers: any;

  constructor() {}

  zoom = 12;
  lat = 55.7094361;
  lng = 37.6546389;

  action = true;
  memoryAction = 1;

  activeInfo(numberCity) {
    if (this.memoryAction !== numberCity) {
      this.action = !this.action;
      this.memoryAction = numberCity;

      if (numberCity === 1) {
        this.lat = 55.7094361;
        this.lng = 37.6546389;
      }
      if (numberCity === 2) {
        this.lat = 59.910123;
        this.lng = 30.2854809;
      }
    }
  }

  ngOnInit() {
    this.markers = stations;
  }
}
