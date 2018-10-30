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
  IdOpen: number;
  getStationsName: string[] = [];
  getStations: string[] = [];

  moscovLat: number = 55.7094361;
  moscovLng: number = 37.6546389;
  piterLat: number = 59.910123;
  piterLng: number = 30.2854809;

  lat: number = this.moscovLat;
  lng: number = this.moscovLng;

  memoryAction: number = 1;

  typeMenuGet(value: number) {
    this.memoryAction = value;
    this.lat = this.moscovLat;
    this.lng = this.moscovLng;
  }

  activeInfo(numberCity: number) {
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

  getIdOpen(i: number) {
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
