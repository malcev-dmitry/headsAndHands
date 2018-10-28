import { Component, OnInit } from '@angular/core';
import { contentCity } from '../../assets/data/contentCity.js';
import { stations } from '../../assets/data/stations.js';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})

export class RightPanelComponent implements OnInit {
  constructor() {}

  getContentCity: any;
  IdOpen: any;
  getStationsName = [];
  getStations = [];

  moscovLat = 55.7094361;
  moscovLng = 37.6546389;
  piterLat = 59.910123;
  piterLng = 30.2854809;

  lat = this.moscovLat;
  lng = this.moscovLng;

  memoryAction = 1;

  typeMenuGet(value) {
    this.memoryAction = value;
    this.lat = this.moscovLat;
    this.lng = this.moscovLng;
  }

  activeInfo(numberCity) {
    if (this.memoryAction !== numberCity) {
      this.memoryAction = numberCity;

      if (numberCity === 1) {
        this.lat = this.moscovLat;
        this.lng = this.moscovLng;
      }
      if (numberCity === 2) {
        this.lat = this.piterLat;
        this.lng = this.piterLng;
      }
      if (numberCity === 3) {
        this.lat = this.piterLat;
        this.lng = this.piterLng;
      }
    }
  }

  getIdOpen(i) {
    this.IdOpen = i;
  }

  ngOnInit() {
    this.getContentCity = contentCity;
    for (let i = 0; i < stations.length; i++) {
      this.getStationsName[i] = stations[i].name.split(' (')[0];
      this.getStations[i] = stations[i].name.split('» ')[1];
    }
  }
}
