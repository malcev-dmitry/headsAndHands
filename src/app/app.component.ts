import { Component, OnInit } from '@angular/core';
import { stations } from '../assets/data/stations.js';
import { data } from '../assets/data/data.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  private icon = {
    url: require('../assets/icons/metroIcon.svg'),
    scaledSize: {
      height: 35,
      width: 28.5
    }
  };

  constructor() {}

  markers: any;

  zoom = 12;
  lat = 59.9434483211;
  lng = 30.3601813316;

  action = true;
  memoryAction = 1;

  activeInfo(numberCity) {
    if (this.memoryAction !== numberCity) {
      this.action = !this.action;
      this.memoryAction = numberCity;
    }
  }

  ngOnInit() {
    this.markers = stations;
    console.log(data);
  }
}
